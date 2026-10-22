import { PageHeader } from "@/components/docs/PageHeader";
import { GridView } from "@/components/docs/Foundations";
export const metadata = { title: "Grid" };
export default function Page() {
  return (<><PageHeader eyebrow="Foundations" title="Grid" description="Layout grids for mobile, tablet and desktop." /><GridView /></>);
}
