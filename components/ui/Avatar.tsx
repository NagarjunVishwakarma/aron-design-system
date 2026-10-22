import React from "react";
import { Status, StatusType } from "./Status";

export type AvatarSize = "xsm" | "sm" | "md" | "lg";
export type AvatarProps = {
  src?: string;
  initials?: string;
  size?: AvatarSize;
  status?: StatusType | null;
  className?: string;
};
const statusSize = { xsm: "sm", sm: "sm", md: "md", lg: "lg" } as const;

export function Avatar({ src, initials = "AB", size = "md", status, className }: AvatarProps) {
  return (
    <span className={["ar-avatar", className || ""].join(" ").trim()} data-size={size}>
      {src ? <img src={src} alt="" className="ar-avatar__img" /> : <span className="ar-avatar__initials">{initials}</span>}
      {status ? <Status type={status} size={statusSize[size]} className="ar-avatar__status" /> : null}
    </span>
  );
}
export default Avatar;
