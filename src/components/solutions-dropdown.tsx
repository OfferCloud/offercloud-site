"use client";

import Link from "next/link";
import { useEffect, useId, useRef } from "react";

type SolutionsDropdownItem = {
  href: string;
  title: string;
  subtitle: string;
  auxiliaryLinks?: {
    href: string;
    label: string;
    external?: boolean;
  }[];
};

type SolutionsDropdownProps = {
  items: SolutionsDropdownItem[];
};

export function SolutionsDropdown({ items }: SolutionsDropdownProps) {
  const detailsRef = useRef<HTMLDetailsElement | null>(null);
  const titleId = useId();
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      const details = detailsRef.current;
      if (!details || !details.open) return;

      const target = event.target;
      if (!(target instanceof Node)) return;
      if (details.contains(target)) return;

      details.open = false;
    }

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  function clearCloseTimer() {
    if (closeTimerRef.current === null) return;
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  }

  function open() {
    clearCloseTimer();
    const details = detailsRef.current;
    if (!details) return;
    details.open = true;
  }

  function close() {
    clearCloseTimer();
    const details = detailsRef.current;
    if (!details) return;
    details.open = false;
  }

  return (
    <details
      ref={detailsRef}
      className="group relative hidden md:block"
      onMouseEnter={open}
      onMouseLeave={() => {
        clearCloseTimer();
        closeTimerRef.current = window.setTimeout(() => close(), 120);
      }}
      onFocus={open}
      onBlur={(event) => {
        const details = detailsRef.current;
        const next = event.relatedTarget;
        if (!details || !(next instanceof Node)) return;
        if (details.contains(next)) return;
        close();
      }}
    >
      <summary
        aria-labelledby={titleId}
        className="flex list-none cursor-pointer items-center gap-2 transition hover:text-white [&::-webkit-details-marker]:hidden"
      >
        <span id={titleId}>Rozwiązania</span>
        <span className="text-xs text-zinc-500 transition group-open:rotate-180">
          +
        </span>
      </summary>

      <div className="absolute right-0 top-full mt-3 min-w-72 rounded-2xl border border-white/10 bg-zinc-950 p-2 shadow-2xl shadow-black/30">
        {items.map((item) => (
          <div
            key={item.href}
            className="rounded-xl px-4 py-3 transition hover:bg-white/5"
          >
            <Link href={item.href} onClick={close} className="block">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-xs leading-5 text-zinc-400">
                {item.subtitle}
              </p>
            </Link>

            {item.auxiliaryLinks?.length ? (
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-3">
                {item.auxiliaryLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className="text-xs font-medium text-emerald-200 transition hover:text-white"
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </details>
  );
}
