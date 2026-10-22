import { PageHeader } from "@/components/docs/PageHeader";
import { ColorComponentView } from "@/components/docs/Foundations";
export const metadata = { title: "Color · Component" };
export default function Page() {
  return (<><PageHeader eyebrow="Foundations / Color" title="Component colors" description="The third tier. Every color a component uses in each of its states, such as Button / Primary / Hover. Each one points at a semantic color, which points at a base color." /><ColorComponentView /></>);
}
