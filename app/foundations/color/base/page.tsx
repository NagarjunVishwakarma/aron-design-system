import { PageHeader } from "@/components/docs/PageHeader";
import { ColorBaseView } from "@/components/docs/Foundations";
export const metadata = { title: "Color · Base" };
export default function Page() {
  return (<><PageHeader eyebrow="Foundations / Color" title="Base colors" description="The raw palette: 11 hue ramps from 50 to 900, plus White and Black. Components never use these directly — they go through semantic tokens." /><ColorBaseView /></>);
}
