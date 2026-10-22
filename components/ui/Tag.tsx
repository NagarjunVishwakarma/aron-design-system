import React from "react";
import { Icon, IconName } from "./icons";

export type TagType = "default" | "danger" | "success" | "warning";
export type TagProps = {
  children?: React.ReactNode;
  type?: TagType;
  leadIcon?: IconName | null;
  /** Shows the close (x) icon on the right. Attach `onRemove` to make it clickable. */
  closable?: boolean;
  onRemove?: () => void;
  className?: string;
};

export function Tag({ children = "Tag", type = "default", leadIcon, closable, onRemove, className }: TagProps) {
  return (
    <span className={["ar-tag", className || ""].join(" ").trim()} data-type={type}>
      {leadIcon ? <span className="ar-tag__lead"><Icon name={leadIcon} size={12} /></span> : null}
      <span className="ar-tag__text">{children}</span>
      {closable ? (
        <button type="button" className="ar-tag__trail" aria-label="Remove" onClick={onRemove}><Icon name="close" size={12} /></button>
      ) : null}
    </span>
  );
}
export default Tag;
