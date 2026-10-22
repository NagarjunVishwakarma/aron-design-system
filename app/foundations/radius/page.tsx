import { PageHeader } from "@/components/docs/PageHeader";
import { RadiusView, BorderView } from "@/components/docs/Foundations";
export const metadata = { title: "Radius & Border" };
export default function Page() {
  return (<><PageHeader eyebrow="Foundations" title="Radius & Border" description="Corner radius and border-width tokens." />
    <section className="d-section"><h2 className="d-h2">Corner radius</h2><RadiusView /></section>
    <section className="d-section"><h2 className="d-h2">Border size</h2><BorderView /></section></>);
}
