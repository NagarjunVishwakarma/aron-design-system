import React from "react";
export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: React.ReactNode }) {
  return (
    <header className="d-header">
      {eyebrow ? <p className="d-eyebrow">{eyebrow}</p> : null}
      <h1 className="d-h1">{title}</h1>
      {description ? <p className="d-lead">{description}</p> : null}
    </header>
  );
}
