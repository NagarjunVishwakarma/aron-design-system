import { PageHeader } from "@/components/docs/PageHeader";
import { ComponentTokensView } from "@/components/docs/Foundations";
export const metadata = { title: "Component tokens" };
export default function Page() { return (<><PageHeader eyebrow="Tokens" title="Component tokens" description="Every state of every component, mapped to a semantic token." /><ComponentTokensView /></>); }
