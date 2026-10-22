import React from "react";

export type BadgeType = "default" | "success" | "warning" | "danger";
export type BadgeProps = { children?: React.ReactNode; type?: BadgeType; className?: string };

export function Badge({ children = "3", type = "default", className }: BadgeProps) {
  return <span className={["ar-badge", className || ""].join(" ").trim()} data-type={type}>{children}</span>;
}
export default Badge;
