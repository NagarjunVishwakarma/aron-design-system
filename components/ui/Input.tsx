"use client";

import React, { useId } from "react";
import { Icon, IconName } from "./icons";

/** Visual states from Figma: Default, Hover, Filled, Focused, Error, Disable. */
export type InputState = "default" | "hover" | "filled" | "focused" | "error" | "disabled";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  label?: string;
  sublabel?: string;
  leadIcon?: IconName | null;
  trailIcon?: IconName | null;
  /** Force a visual state (docs/screenshots). Real :hover / :focus / disabled work automatically. */
  state?: InputState;
  error?: boolean;
};

export function Input({
  label = "Label",
  sublabel,
  leadIcon,
  trailIcon,
  state = "default",
  error,
  disabled,
  placeholder = "Placeholder",
  className,
  id,
  ...rest
}: InputProps) {
  const auto = useId();
  const inputId = id || auto;
  const effective: InputState = error ? "error" : state;
  const isDisabled = disabled || effective === "disabled";
  return (
    <div
      className={["ar-field", className || ""].join(" ").trim()}
      data-state={effective === "default" || effective === "disabled" ? (effective === "disabled" ? "disabled" : undefined) : effective}
      data-disabled={isDisabled ? "true" : undefined}
    >
      {label ? <label className="ar-field__label" htmlFor={inputId}>{label}</label> : null}
      <div className="ar-field__box">
        {leadIcon ? <span className="ar-field__lead"><Icon name={leadIcon} size={16} /></span> : null}
        <input
          id={inputId}
          className="ar-field__input"
          placeholder={placeholder}
          disabled={isDisabled}
          aria-invalid={effective === "error" || undefined}
          aria-describedby={sublabel ? `${inputId}-sub` : undefined}
          {...rest}
        />
        {trailIcon ? <span className="ar-field__trail"><Icon name={trailIcon} size={16} /></span> : null}
      </div>
      {sublabel ? <p className="ar-field__sub" id={`${inputId}-sub`}>{sublabel}</p> : null}
    </div>
  );
}
export default Input;
