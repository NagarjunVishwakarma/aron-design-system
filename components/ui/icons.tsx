import React from "react";

/**
 * Icon set. All icons use currentColor, so they pick up the colour tokens of
 * whatever component they sit inside.
 * NOTE: these are neutral placeholder glyphs. Replace the paths with the SVGs
 * exported from your Figma icon page (keep the 24x24 viewBox) — nothing else changes.
 */
const paths: Record<string, React.ReactNode> = {
  close: <path d="M6 6l12 12M18 6L6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  search: (<><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></>),
  info: (<><circle cx="12" cy="12" r="9" /><path d="M12 11v5.5" /><circle cx="12" cy="7.8" r="0.6" fill="currentColor" /></>),
  success: (<><circle cx="12" cy="12" r="9" /><path d="M8 12.5l3 3 5-6" /></>),
  warning: (<><path d="M12 3.5l9.5 16.5h-19z" /><path d="M12 10v4.5" /><circle cx="12" cy="17.2" r="0.6" fill="currentColor" /></>),
  error: (<><circle cx="12" cy="12" r="9" /><path d="M9 9l6 6M15 9l-6 6" /></>),
  user: (<><circle cx="12" cy="8.5" r="3.5" /><path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" /></>),
  mail: (<><rect x="3" y="5.5" width="18" height="13" rx="2" /><path d="M3.5 7l8.5 6.5L20.5 7" /></>),
  help: (<><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 114 2c-.9.6-1.5 1.1-1.5 2.2" /><circle cx="12" cy="17" r="0.6" fill="currentColor" /></>),
  folder: <path d="M3.5 7.5a2 2 0 012-2h4l2 2.5h7a2 2 0 012 2V17a2 2 0 01-2 2h-13a2 2 0 01-2-2z" />,
  spinner: <path d="M12 3a9 9 0 109 9" />,
};

export type IconName = keyof typeof paths;
export const iconNames = Object.keys(paths) as IconName[];

export type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={["ar-icon", name === "spinner" ? "ar-spin" : "", className || ""].join(" ").trim()}
    >
      {paths[name]}
    </svg>
  );
}
