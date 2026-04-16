"use client";

import { useEffect, useMemo, useState } from "react";

import { LottieIllustration } from "@/components/lottie/lottie-illustration";

type Error404IllustrationProps = {
  className?: string;
};

export function Error404Illustration({ className }: Error404IllustrationProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [failed, setFailed] = useState(false);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
    );
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/components/lottie/error-404.json", {
          cache: "force-cache",
        });
        if (!res.ok) throw new Error(`Failed to load Lottie: ${res.status}`);
        const json = (await res.json()) as object;
        if (!cancelled) setAnimationData(json);
      } catch {
        if (!cancelled) setFailed(true);
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion || failed || !animationData) return null;

  return (
    <LottieIllustration
      animationData={animationData}
      ariaLabel="Ilustracja błędu 404"
      className={className}
      loop
      autoplay
      speed={0.9}
    />
  );
}

