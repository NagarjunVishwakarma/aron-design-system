"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { nav } from "@/lib/nav";

export function Sidebar() {
  const path = usePathname() || "/";
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className="d-burger" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
      <aside className={"d-side" + (open ? " is-open" : "")}>
        <Link href="/" className="d-brand" onClick={() => setOpen(false)}>
          <span className="d-brand__mark">A</span>
          <span><strong>Aron</strong> Design System</span>
        </Link>
        <nav aria-label="Primary">
          {nav.map((g) => (
            <div key={g.title} className="d-navgroup">
              <p className="d-navtitle">{g.title}</p>
              <ul>
                {g.items.map((i) => {
                  const active = i.href === "/" ? path === "/" : path === i.href || path === i.href + "/";
                  return (
                    <li key={i.href}>
                      <Link href={i.href} className={"d-navlink" + (active ? " is-active" : "")} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>{i.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
          <div className="d-navgroup">
            <p className="d-navtitle">Storybook</p>
            <ul><li><a className="d-navlink" href="/storybook/" target="_blank" rel="noopener noreferrer">Open Storybook ↗</a></li></ul>
          </div>
        </nav>
      </aside>
    </>
  );
}
