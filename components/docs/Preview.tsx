import React from "react";
import { ComponentDoc, Section, normalizeProps } from "@/lib/registry";

/** Renders every section (variants, sizes, full state matrix…) of a component from the registry. */
export function ComponentSections({ doc, only }: { doc: ComponentDoc; only?: string[] }) {
  const C = doc.Component;
  const sections = only ? doc.sections.filter((s) => only.includes(s.title)) : doc.sections;
  return (
    <>
      {sections.map((s) => (
        <section key={s.title} className="d-section">
          <h2 className="d-h2">{s.title}</h2>
          {s.description ? <p className="d-lead">{s.description}</p> : null}
          <SectionBody doc={doc} section={s} C={C} />
        </section>
      ))}
    </>
  );
}

function SectionBody({ doc, section, C }: { doc: ComponentDoc; section: Section; C: React.ComponentType<any> }) {
  if ("items" in section) {
    return (
      <div className="d-items">
        {section.items.map((it) => (
          <figure key={it.label} className="d-item">
            <div className="d-stage"><C {...normalizeProps(it.props)} /></div>
            <figcaption className="d-cap">{it.label}</figcaption>
          </figure>
        ))}
      </div>
    );
  }
  return (
    <div className="d-matrix-wrap">
      <table className="d-matrix">
        <thead>
          <tr><th />{section.cols.map((c) => <th key={c.label}>{c.label}</th>)}</tr>
        </thead>
        <tbody>
          {section.rows.map((r) => (
            <tr key={r.label}>
              <th scope="row">{r.label}</th>
              {section.cols.map((c) => (
                <td key={c.label}><C {...normalizeProps({ ...r.props, ...c.props })} /></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
