"use client";

import * as React from "react";

type NoCopyProps = {
  children: React.ReactNode;
  className?: string;
};

function isCopyShortcut(event: React.KeyboardEvent<HTMLElement>) {
  const key = event.key.toLowerCase();
  const isModifier = event.metaKey || event.ctrlKey;

  return isModifier && (key === "c" || key === "x" || key === "a");
}

export function NoCopy({ children, className }: NoCopyProps) {
  return (
    <div
      className={["select-none", "no-copy", className].filter(Boolean).join(" ")}
      onCopy={(event) => event.preventDefault()}
      onCut={(event) => event.preventDefault()}
      onPaste={(event) => event.preventDefault()}
      onContextMenu={(event) => event.preventDefault()}
      onKeyDown={(event) => {
        if (isCopyShortcut(event)) event.preventDefault();
      }}
    >
      <style jsx global>{`
        /* Disable link styling inside NoCopy wrapper (no underline / no special color). */
        .no-copy a {
          color: inherit !important;
          text-decoration: none !important;
          text-decoration-line: none !important;
        }

        .no-copy a:hover {
          color: inherit !important;
          text-decoration: none !important;
          text-decoration-line: none !important;
        }
      `}</style>
      {children}
    </div>
  );
}

