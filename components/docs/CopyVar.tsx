"use client";

import React, { useState } from "react";

/** The token's CSS variable as quiet monospace text. Click it to copy. */
export function CopyVar({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      /* clipboard blocked: do nothing */
    }
  };
  return (
    <button type="button" className="d-var" onClick={copy} title="Click to copy" aria-label={`Copy ${value}`}>
      <span className={copied ? "d-var__text is-copied" : "d-var__text"} aria-live="polite">{copied ? "Copied" : value}</span>
    </button>
  );
}
