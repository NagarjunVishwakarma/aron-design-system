import React from "react";
import { Icon, IconName } from "./icons";

export type ButtonVariant = "primary" | "primary-outline" | "ghost" | "secondary" | "danger";
export type ButtonSize = "lg" | "default" | "sm";
/** `state` forces a visual state (for docs/screenshots). Real hover/focus/disabled work automatically. */
export type ButtonState = "default" | "hover" | "focus" | "disabled" | "loading";

export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  leadIcon?: IconName | null;
  trailIcon?: IconName | null;
  loading?: boolean;
};

const iconSize: Record<ButtonSize, number> = { lg: 20, default: 16, sm: 12 };

export function Button({
  children = "Button",
  variant = "primary",
  size = "default",
  state = "default",
  leadIcon,
  trailIcon,
  loading,
  disabled,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  const isLoading = loading || state === "loading";
  const isDisabled = disabled || state === "disabled" || isLoading;
  const dataState = state === "hover" || state === "focus" || state === "loading" ? state : undefined;
  const px = iconSize[size];
  return (
    <button
      type={type}
      className={["ar-btn", className || ""].join(" ").trim()}
      data-variant={variant}
      data-size={size}
      data-state={state === "disabled" ? "disabled" : dataState}
      data-loading={isLoading ? "true" : undefined}
      aria-busy={isLoading || undefined}
      disabled={isDisabled}
      {...rest}
    >
      {isLoading ? <span className="ar-btn__lead"><Icon name="spinner" size={px} /></span>
        : leadIcon ? <span className="ar-btn__lead"><Icon name={leadIcon} size={px} /></span> : null}
      {children ? <span className="ar-btn__label">{children}</span> : null}
      {trailIcon && !isLoading ? <span className="ar-btn__trail"><Icon name={trailIcon} size={px} /></span> : null}
    </button>
  );
}
export default Button;
