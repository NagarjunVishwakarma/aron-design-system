import React from "react";

export type ToggleState = "default" | "hover" | "focus";
export type ToggleProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  label?: string;
  state?: ToggleState;
};

export function Toggle({ label, state = "default", disabled, className, ...rest }: ToggleProps) {
  return (
    <label className={["ar-toggle", className || ""].join(" ").trim()} data-state={state === "default" ? undefined : state} data-disabled={disabled ? "true" : undefined}>
      <input type="checkbox" role="switch" disabled={disabled} {...rest} />
      <span className="ar-toggle__track"><span className="ar-toggle__thumb" /></span>
      {label ? <span className="ar-toggle__label">{label}</span> : null}
    </label>
  );
}
export default Toggle;
