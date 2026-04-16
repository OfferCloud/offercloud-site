'use client';

import { useEffect, useMemo, useRef } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";

type LottieIllustrationProps = {
  animationData: object;
  className?: string;
  ariaLabel?: string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
};

export function LottieIllustration({
  animationData,
  className,
  ariaLabel = "Animated illustration",
  loop = true,
  autoplay = true,
  speed = 1,
}: LottieIllustrationProps) {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    const instance = lottieRef.current;
    if (!instance) return;

    if (prefersReducedMotion) {
      instance.pause();
      return;
    }

    instance.setSpeed(speed);
    if (autoplay) instance.play();
  }, [autoplay, prefersReducedMotion, speed]);

  return (
    <div className={className} role="img" aria-label={ariaLabel}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
      />
    </div>
  );
}

