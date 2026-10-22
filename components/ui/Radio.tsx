import React from "react";

export type RadioState = "default" | "hover" | "focus";
export type RadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  label?: string;
  state?: RadioState;
};

export function Radio({ label, state = "default", disabled, className, ...rest }: RadioProps) {
  return (
    <label className={["ar-radio", className || ""].join(" ").trim()} data-state={state === "default" ? undefined : state} data-disabled={disabled ? "true" : undefined}>
      <input type="radio" disabled={disabled} {...rest} />
      <span className="ar-radio__dot" />
      {label ? <span className="ar-radio__label">{label}</span> : null}
    </label>
  );
}
export default Radio;
