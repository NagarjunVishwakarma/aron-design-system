import { PageHeader } from "@/components/docs/PageHeader";
import { SpacingView, SizeView } from "@/components/docs/Foundations";
export const metadata = { title: "Spacing & Size" };
export default function Page() {
  return (<><PageHeader eyebrow="Foundations" title="Spacing & Size" description="Spacing is for gaps and padding; size is for dimensions of elements. Both are built from the base number scale." />
    <section className="d-section"><h2 className="d-h2">Space</h2><SpacingView /></section>
    <section className="d-section"><h2 className="d-h2">Size</h2><SizeView /></section></>);
}
