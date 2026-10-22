"use client";

import React from "react";
import { Icon } from "./icons";

export type CheckboxState = "default" | "hover" | "focus";

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  label?: string;
  indeterminate?: boolean;
  state?: CheckboxState;
};

export function Checkbox({ label, indeterminate, state = "default", disabled, className, defaultChecked, checked, ...rest }: CheckboxProps) {
  const ref = React.useCallback((el: HTMLInputElement | null) => { if (el) el.indeterminate = !!indeterminate; }, [indeterminate]);
  return (
    <label className={["ar-check", className || ""].join(" ").trim()} data-state={state === "default" ? undefined : state} data-disabled={disabled ? "true" : undefined}>
      <input ref={ref} type="checkbox" disabled={disabled} defaultChecked={checked === undefined ? defaultChecked : undefined} checked={checked} {...rest} />
      <span className="ar-check__box">
        <span className="ar-check__tick"><Icon name="check" size={14} /></span>
        <span className="ar-check__dash"><Icon name="minus" size={14} /></span>
      </span>
      {label ? <span className="ar-check__label">{label}</span> : null}
    </label>
  );
}
export default Checkbox;
