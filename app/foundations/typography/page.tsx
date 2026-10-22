import { PageHeader } from "@/components/docs/PageHeader";
import { TypographyView } from "@/components/docs/Foundations";
export const metadata = { title: "Typography" };
export default function Page() {
  return (<><PageHeader eyebrow="Foundations" title="Typography" description="Inter, in a web scale and a mobile scale. Every style comes in Regular, Medium and Semi-bold." /><TypographyView /></>);
}
