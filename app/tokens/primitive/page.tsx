import { PageHeader } from "@/components/docs/PageHeader";
import { PrimitiveTokensView } from "@/components/docs/Foundations";
export const metadata = { title: "Primitive tokens" };
export default function Page() { return (<><PageHeader eyebrow="Tokens" title="Primitive (Base) tokens" description="The raw values. Use semantic tokens in your UI instead." /><PrimitiveTokensView /></>); }
