import { PageHeader } from "@/components/docs/PageHeader";
import { registry, normalizeProps } from "@/lib/registry";
export const metadata = { title: "Components" };
export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Components" title="Components" description={`${registry.length} components, each documented with every variant and state.`} />
      <div className="d-cards d-cards--lg">
        {registry.map((c) => {
          const C = c.Component;
          const first = "items" in c.sections[0] ? c.sections[0].items[0].props : {};
          return (
            <a key={c.slug} href={`/components/${c.slug}`} className="d-linkcard">
              <div className="d-linkcard__stage"><C {...normalizeProps(first)} /></div>
              <strong>{c.name}</strong>
              <span>{c.description}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}
