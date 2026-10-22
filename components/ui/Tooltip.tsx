import React from "react";
import { Icon } from "./icons";

export type TooltipProps = {
  title?: string;
  subtitle?: string;
  icon?: boolean;
  className?: string;
};

/** The tooltip card itself (280px). Wrap it with your own positioning/trigger logic. */
export function Tooltip({ title = "Tooltip title", subtitle, icon = true, className }: TooltipProps) {
  return (
    <div role="tooltip" className={["ar-tooltip", className || ""].join(" ").trim()}>
      {icon ? <span className="ar-tooltip__icon"><Icon name="info" size={16} /></span> : null}
      <div className="ar-tooltip__body">
        <p className="ar-tooltip__title">{title}</p>
        {subtitle ? <p className="ar-tooltip__subtitle">{subtitle}</p> : null}
      </div>
    </div>
  );
}
export default Tooltip;
