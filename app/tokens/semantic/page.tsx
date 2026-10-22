import { PageHeader } from "@/components/docs/PageHeader";
import { SemanticTokensView } from "@/components/docs/Foundations";
export const metadata = { title: "Semantic tokens" };
export default function Page() { return (<><PageHeader eyebrow="Tokens" title="Semantic tokens" description="Named by purpose. These are what you should reach for in product UI." /><SemanticTokensView /></>); }
