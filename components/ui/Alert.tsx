import React from "react";
import { Icon, IconName } from "./icons";

export type AlertType = "default" | "success" | "warning" | "error";
export type AlertProps = {
  title?: string;
  subtitle?: string;
  type?: AlertType;
  /** Shows the close (x) icon. Attach `onClose` to make it clickable. */
  closable?: boolean;
  onClose?: () => void;
  className?: string;
};
const leadIcon: Record<AlertType, IconName> = { default: "info", success: "success", warning: "warning", error: "error" };

export function Alert({ title = "Alert title", subtitle, type = "default", closable, onClose, className }: AlertProps) {
  return (
    <div role={type === "error" ? "alert" : "status"} className={["ar-alert", className || ""].join(" ").trim()} data-type={type}>
      <span className="ar-alert__lead"><Icon name={leadIcon[type]} size={20} /></span>
      <div className="ar-alert__body">
        <p className="ar-alert__title">{title}</p>
        {subtitle ? <p className="ar-alert__subtitle">{subtitle}</p> : null}
      </div>
      {closable ? (
        <button type="button" className="ar-alert__trail" aria-label="Dismiss" onClick={onClose}><Icon name="close" size={20} /></button>
      ) : null}
    </div>
  );
}
export default Alert;
