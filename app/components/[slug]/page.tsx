import { notFound } from "next/navigation";
import { registry, getDoc } from "@/lib/registry";
import { ComponentPage } from "@/components/docs/ComponentPage";

export const dynamicParams = false;
export function generateStaticParams() { return registry.map((c) => ({ slug: c.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) { return { title: getDoc(params.slug)?.name }; }

export default function Page({ params }: { params: { slug: string } }) {
  const doc = getDoc(params.slug);
  if (!doc) notFound();
  return <ComponentPage doc={doc!} />;
}
