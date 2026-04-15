"use client";

import Script from "next/script";
import { useEffect, useId, useRef, useState } from "react";

type OfferCloudPublisherDemoProps = {
  className?: string;
  marketplaceCode?: string;
};

declare global {
  interface Window {
    iFrameResize?: (
      options: { log?: boolean },
      target: string | HTMLIFrameElement,
    ) => void;
  }
}

const OFFERCLOUD_ORIGIN = "https://client.offercloud.pl";

export function OfferCloudPublisherDemo({
  className,
  marketplaceCode = "offercloud",
}: OfferCloudPublisherDemoProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [resizerReady, setResizerReady] = useState(false);
  const iframeId = useId().replace(/:/g, "");
  const iframeSrc = `${OFFERCLOUD_ORIGIN}/marketplaces/${marketplaceCode}/offers`;

  useEffect(() => {
    if (!resizerReady || !iframeRef.current || !window.iFrameResize) {
      return;
    }

    window.iFrameResize({ log: false }, iframeRef.current);
  }, [resizerReady]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent<{ urlChange?: string }>) => {
      if (
        event.origin !== OFFERCLOUD_ORIGIN ||
        !event.data?.urlChange ||
        !iframeRef.current
      ) {
        return;
      }

      const url = new URL(window.location.href);
      url.searchParams.set("clientPath", event.data.urlChange);
      window.history.replaceState({ href: url.href }, "", url);
      window.scrollTo({
        top: Math.max(iframeRef.current.offsetTop - 50, 0),
        left: iframeRef.current.offsetLeft,
        behavior: "smooth",
      });
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <>
      <iframe
        id={iframeId}
        ref={iframeRef}
        src={iframeSrc}
        className={`w-full border-0 ${className ?? ""}`}
        title="OfferCloud Publisher Demo"
        loading="lazy"
      />
      <Script
        id="offercloud-iframe-resizer"
        src={`${OFFERCLOUD_ORIGIN}/js/iframeResizer.min.js`}
        strategy="afterInteractive"
        onReady={() => setResizerReady(true)}
      />
    </>
  );
}
