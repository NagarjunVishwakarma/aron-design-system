import { PageHeader } from "@/components/docs/PageHeader";
import { IconsView } from "@/components/docs/Foundations";
export const metadata = { title: "Icons" };
export default function Page() {
  return (<><PageHeader eyebrow="Foundations" title="Icons" description="24px viewBox, drawn with currentColor so they follow the colour tokens of the component they sit in. These are placeholder glyphs until your Figma icon SVGs are dropped in." /><IconsView /></>);
}
