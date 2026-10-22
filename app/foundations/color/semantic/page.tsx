import { PageHeader } from "@/components/docs/PageHeader";
import { ColorSemanticView } from "@/components/docs/Foundations";
export const metadata = { title: "Color · Semantic" };
export default function Page() {
  return (<><PageHeader eyebrow="Foundations / Color" title="Semantic colors" description="Colors named for what they do (surface, text, border, icon) instead of what they look like. Each one points at a base color." /><ColorSemanticView /></>);
}
