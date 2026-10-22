import React from "react";
import type { StoryObj } from "@storybook/react";
import { defaultsOf, getDoc, normalizeProps } from "@/lib/registry";
import { ComponentSections } from "@/components/docs/Preview";

/** The interactive story: every prop is a control. */
export function playground(slug: string): StoryObj {
  const doc = getDoc(slug)!;
  const argTypes: Record<string, any> = {};
  for (const c of doc.controls) {
    argTypes[c.name] = c.type === "select" ? { control: "select", options: c.options } : c.type === "boolean" ? { control: "boolean" } : { control: "text" };
  }
  return {
    name: "Playground",
    args: defaultsOf(doc),
    argTypes,
    render: (args: any) => {
      const { children, ...rest } = normalizeProps(args);
      const C = doc.Component;
      return <C key={JSON.stringify(args)} {...rest}>{children}</C>;
    },
  };
}

/** One story per section of the registry (Variants, Sizes, All states…). */
export function sectionStory(slug: string, title: string, name?: string): StoryObj {
  const doc = getDoc(slug)!;
  return {
    name: name || title,
    parameters: { controls: { disable: true } },
    render: () => <div className="d-sb"><ComponentSections doc={doc} only={[title]} /></div>,
  };
}
