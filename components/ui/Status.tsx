import React from "react";

export type StatusType = "online" | "away" | "busy" | "offline";
export type StatusSize = "sm" | "md" | "lg";
export type StatusProps = { type?: StatusType; size?: StatusSize; className?: string };

export function Status({ type = "online", size = "md", className }: StatusProps) {
  return <span role="img" aria-label={type} className={["ar-status", className || ""].join(" ").trim()} data-type={type} data-size={size} />;
}
export default Status;
