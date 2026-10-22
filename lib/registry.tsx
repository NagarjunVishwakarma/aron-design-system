import React from "react";
import {
  Alert, Avatar, Badge, Button, Checkbox, Input, Radio, Status, Tag, Toggle, Tooltip, iconNames,
} from "@/components/ui";

/**
 * One entry per component. The docs site AND Storybook are both generated from this file,
 * so adding a state or a prop here updates both places.
 */
export type Props = Record<string, any>;
export type Control =
  | { name: string; type: "select"; options: string[]; default: string }
  | { name: string; type: "boolean"; default: boolean }
  | { name: string; type: "text"; default: string };
export type Item = { label: string; props: Props };
export type Section = { title: string; description?: string } & (
  | { items: Item[] }
  | { rows: Item[]; cols: Item[] }
);
export type PropDoc = { name: string; type: string; default: string; description: string };

export type ComponentDoc = {
  slug: string;
  name: string;
  description: string;
  Component: React.ComponentType<any>;
  controls: Control[];
  sections: Section[];
  props: PropDoc[];
  /** component-tier token prefix, e.g. "--button-" */
  tokenPrefix?: string;
  /** semantic tokens this component uses directly (when it has no component-tier tokens) */
  semanticTokens?: string[];
  usage: { do: string[]; dont: string[] };
  a11y: string[];
  specs: { label: string; value: string }[];
};

const icons = ["none", ...iconNames];
const iconCtl = (name: string): Control => ({ name, type: "select", options: icons, default: "none" });
const norm = (p: Props) => {
  const o: Props = { ...p };
  for (const k of Object.keys(o)) if (o[k] === "none") o[k] = null;
  return o;
};
export const normalizeProps = norm;

const buttonVariants = ["primary", "primary-outline", "ghost", "secondary", "danger"];
const buttonStates = ["default", "hover", "focus", "disabled", "loading"];
const cap = (s: string) => s.replace(/-/g, " ").replace(/^./, (c) => c.toUpperCase());

export const registry: ComponentDoc[] = [
  {
    slug: "button",
    name: "Button",
    description: "Triggers an action. Five variants, three sizes, and every interaction state from the Figma file.",
    Component: Button,
    controls: [
      { name: "children", type: "text", default: "Button" },
      { name: "variant", type: "select", options: buttonVariants, default: "primary" },
      { name: "size", type: "select", options: ["lg", "default", "sm"], default: "default" },
      { name: "state", type: "select", options: buttonStates, default: "default" },
      iconCtl("leadIcon"),
      iconCtl("trailIcon"),
    ],
    sections: [
      { title: "Variants", description: "Primary for the main action, Secondary and Ghost for supporting actions, Danger for destructive ones.",
        items: buttonVariants.map((v) => ({ label: cap(v), props: { variant: v } })) },
      { title: "Sizes", description: "Large uses 16/24 text and a 20px icon; Default 14/22 and 16px; Small 14/22 and a 12px icon.",
        items: [{ label: "Large", props: { size: "lg" } }, { label: "Default", props: { size: "default" } }, { label: "Small", props: { size: "sm" } }] },
      { title: "All states", description: "Every variant in every state: Default, Hover, Focus, Disabled, Loading. Real hover/focus/disabled behave the same way.",
        rows: buttonVariants.map((v) => ({ label: cap(v), props: { variant: v } })),
        cols: buttonStates.map((s) => ({ label: cap(s), props: { state: s } })) },
      { title: "With icons", description: "Icons inherit the Lead icon / Trail icon tokens for each state.",
        items: [
          { label: "Lead icon", props: { leadIcon: "plus" } },
          { label: "Trail icon", props: { trailIcon: "check" } },
          { label: "Both", props: { leadIcon: "plus", trailIcon: "check" } },
          { label: "Outline + icon", props: { variant: "primary-outline", leadIcon: "search" } },
          { label: "Ghost + icon", props: { variant: "ghost", trailIcon: "plus" } },
        ] },
    ],
    props: [
      { name: "variant", type: '"primary" | "primary-outline" | "ghost" | "secondary" | "danger"', default: '"primary"', description: "Visual style." },
      { name: "size", type: '"lg" | "default" | "sm"', default: '"default"', description: "Text and icon size." },
      { name: "state", type: '"default" | "hover" | "focus" | "disabled" | "loading"', default: '"default"', description: "Force a state (docs/tests). Real interaction states work automatically." },
      { name: "leadIcon / trailIcon", type: "IconName | null", default: "null", description: "Icon before / after the label." },
      { name: "loading", type: "boolean", default: "false", description: "Shows a spinner and blocks clicks." },
      { name: "disabled", type: "boolean", default: "false", description: "Disables the button." },
    ],
    tokenPrefix: "--button-",
    usage: {
      do: ["Use one Primary button per view for the main action.", "Write short, verb-first labels (\"Save changes\").", "Use Danger only for destructive actions."],
      dont: ["Don't place two Primary buttons side by side.", "Don't use Ghost for the only action on a page.", "Don't disable a button without explaining why."],
    },
    a11y: ["Renders a native <button>, so Enter and Space work out of the box.", "Loading sets aria-busy and disables clicks.", "Focus is visible: a 2px border using the Focus/Border token."],
    specs: [{ label: "Padding", value: "8px 16px" }, { label: "Gap", value: "12px" }, { label: "Radius", value: "8px" }, { label: "Focus", value: "2px border" }, { label: "Outline", value: "1px border" }],
  },
  {
    slug: "input",
    name: "Input",
    description: "Single-line text field with label, helper text and optional icons. Six states.",
    Component: Input,
    controls: [
      { name: "label", type: "text", default: "Label" },
      { name: "sublabel", type: "text", default: "Helper text" },
      { name: "placeholder", type: "text", default: "Placeholder" },
      { name: "state", type: "select", options: ["default", "hover", "filled", "focused", "error", "disabled"], default: "default" },
      iconCtl("leadIcon"),
      iconCtl("trailIcon"),
    ],
    sections: [
      { title: "All states", description: "Default, Hover, Filled, Focused, Error, Disabled.",
        items: [
          { label: "Default", props: { state: "default", sublabel: "Helper text" } },
          { label: "Hover", props: { state: "hover", sublabel: "Helper text" } },
          { label: "Filled", props: { state: "filled", defaultValue: "Jane Cooper", sublabel: "Helper text" } },
          { label: "Focused", props: { state: "focused", sublabel: "Helper text" } },
          { label: "Error", props: { state: "error", defaultValue: "jane@", sublabel: "Enter a valid email address", trailIcon: "error" } },
          { label: "Disabled", props: { state: "disabled", sublabel: "Helper text" } },
        ] },
      { title: "With icons", items: [
          { label: "Leading icon", props: { leadIcon: "search", placeholder: "Search" } },
          { label: "Trailing icon", props: { trailIcon: "help" } },
          { label: "Both", props: { leadIcon: "mail", trailIcon: "check", defaultValue: "jane@aron.design", state: "filled" } },
        ] },
    ],
    props: [
      { name: "label", type: "string", default: '"Label"', description: "Visible label above the field." },
      { name: "sublabel", type: "string", default: "undefined", description: "Helper or error text below the field." },
      { name: "state", type: '"default" | "hover" | "filled" | "focused" | "error" | "disabled"', default: '"default"', description: "Force a state (docs/tests)." },
      { name: "error", type: "boolean", default: "false", description: "Marks the field invalid (sets aria-invalid)." },
      { name: "leadIcon / trailIcon", type: "IconName | null", default: "null", description: "Icons inside the field." },
    ],
    tokenPrefix: "--input-",
    usage: {
      do: ["Always show a visible label.", "Use the sublabel to explain format or the error.", "Keep placeholder text as an example, not a label."],
      dont: ["Don't rely on the placeholder alone.", "Don't use red text without also changing the border and message."],
    },
    a11y: ["Label is tied to the field with for/id.", "Error state sets aria-invalid and links the message with aria-describedby.", "Disabled uses the native disabled attribute."],
    specs: [{ label: "Width", value: "298px" }, { label: "Field height", value: "48px" }, { label: "Padding", value: "12px" }, { label: "Radius", value: "8px" }],
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    description: "Lets people select one or more options. Unchecked, checked and indeterminate.",
    Component: Checkbox,
    controls: [
      { name: "label", type: "text", default: "Checkbox label" },
      { name: "state", type: "select", options: ["default", "hover", "focus"], default: "default" },
      { name: "defaultChecked", type: "boolean", default: false },
      { name: "indeterminate", type: "boolean", default: false },
      { name: "disabled", type: "boolean", default: false },
    ],
    sections: [
      { title: "All states",
        rows: [
          { label: "Unchecked", props: {} },
          { label: "Checked", props: { defaultChecked: true } },
          { label: "Indeterminate", props: { indeterminate: true } },
        ],
        cols: [
          { label: "Default", props: { label: "Label" } },
          { label: "Hover", props: { label: "Label", state: "hover" } },
          { label: "Focus", props: { label: "Label", state: "focus" } },
          { label: "Disabled", props: { label: "Label", disabled: true } },
        ] },
    ],
    props: [
      { name: "label", type: "string", default: "undefined", description: "Text next to the box." },
      { name: "indeterminate", type: "boolean", default: "false", description: "Mixed state (some children selected)." },
      { name: "disabled", type: "boolean", default: "false", description: "Disables the checkbox." },
      { name: "state", type: '"default" | "hover" | "focus"', default: '"default"', description: "Force a visual state (docs/tests)." },
    ],
    semanticTokens: ["--color-surface-default", "--color-border-strong", "--color-surface-brand-strong", "--color-border-brand-strong", "--color-border-brand-soft", "--color-icon-inverse", "--color-surface-subtle", "--color-border-soft", "--color-surface-brand-soft", "--color-text-strong", "--color-text-subtle", "--corner-radius-2"],
    usage: { do: ["Use for independent on/off choices.", "Make the label clickable (it already is)."], dont: ["Don't use a checkbox for mutually exclusive options — use Radio.", "Don't apply the change immediately; checkboxes usually need a Save."] },
    a11y: ["Native input type=checkbox: Space toggles, focus ring is visible.", "Indeterminate is set on the DOM property so screen readers announce \"mixed\"."],
    specs: [{ label: "Box", value: "20px" }, { label: "Radius", value: "2px" }, { label: "Gap", value: "8px" }],
  },
  {
    slug: "radio",
    name: "Radio",
    description: "Lets people pick exactly one option from a set.",
    Component: Radio,
    controls: [
      { name: "label", type: "text", default: "Radio label" },
      { name: "state", type: "select", options: ["default", "hover", "focus"], default: "default" },
      { name: "defaultChecked", type: "boolean", default: false },
      { name: "disabled", type: "boolean", default: false },
    ],
    sections: [
      { title: "All states",
        rows: [{ label: "Unselected", props: {} }, { label: "Selected", props: { defaultChecked: true } }],
        cols: [
          { label: "Default", props: { label: "Label" } },
          { label: "Hover", props: { label: "Label", state: "hover" } },
          { label: "Focus", props: { label: "Label", state: "focus" } },
          { label: "Disabled", props: { label: "Label", disabled: true } },
        ] },
    ],
    props: [
      { name: "label", type: "string", default: "undefined", description: "Text next to the dot." },
      { name: "disabled", type: "boolean", default: "false", description: "Disables the radio." },
      { name: "state", type: '"default" | "hover" | "focus"', default: '"default"', description: "Force a visual state (docs/tests)." },
    ],
    semanticTokens: ["--color-surface-default", "--color-border-strong", "--color-surface-brand-strong", "--color-border-brand-strong", "--color-border-brand-soft", "--color-surface-subtle", "--color-border-soft", "--color-surface-brand-soft", "--color-text-strong", "--color-text-subtle"],
    usage: { do: ["Group radios with the same name attribute.", "Pre-select the safest default."], dont: ["Don't use for more than ~6 options — use a select.", "Don't use a single radio on its own."] },
    a11y: ["Native input type=radio: arrow keys move between options in a group."],
    specs: [{ label: "Circle", value: "16px" }, { label: "Dot", value: "8px" }, { label: "Gap", value: "8px" }],
  },
  {
    slug: "toggle",
    name: "Toggle",
    description: "Switches a single setting on or off, taking effect immediately.",
    Component: Toggle,
    controls: [
      { name: "label", type: "text", default: "Toggle label" },
      { name: "state", type: "select", options: ["default", "hover", "focus"], default: "default" },
      { name: "defaultChecked", type: "boolean", default: false },
      { name: "disabled", type: "boolean", default: false },
    ],
    sections: [
      { title: "All states",
        rows: [{ label: "Off", props: {} }, { label: "On", props: { defaultChecked: true } }],
        cols: [
          { label: "Default", props: { label: "Label" } },
          { label: "Hover", props: { label: "Label", state: "hover" } },
          { label: "Focus", props: { label: "Label", state: "focus" } },
          { label: "Disabled", props: { label: "Label", disabled: true } },
        ] },
    ],
    props: [
      { name: "label", type: "string", default: "undefined", description: "Text next to the switch." },
      { name: "disabled", type: "boolean", default: "false", description: "Disables the toggle." },
      { name: "state", type: '"default" | "hover" | "focus"', default: '"default"', description: "Force a visual state (docs/tests)." },
    ],
    semanticTokens: ["--color-surface-moderate", "--color-surface-strong", "--color-surface-brand-strong", "--color-surface-brand-deep", "--color-border-brand-soft", "--color-surface-soft", "--color-surface-brand-soft", "--color-text-strong"],
    usage: { do: ["Use when the change applies immediately.", "Label what the toggle controls, not its state."], dont: ["Don't use where a Save button is required — use a Checkbox."] },
    a11y: ["Exposes role=\"switch\" with the native checked state.", "Space toggles; focus ring is visible."],
    specs: [{ label: "Track", value: "27 × 16px" }, { label: "Thumb", value: "12px" }],
  },
  {
    slug: "tag",
    name: "Tag",
    description: "Compact label for status or categories. Four types, optional icons.",
    Component: Tag,
    controls: [
      { name: "children", type: "text", default: "Tag" },
      { name: "type", type: "select", options: ["default", "danger", "success", "warning"], default: "default" },
      iconCtl("leadIcon"),
      { name: "closable", type: "boolean", default: false },
    ],
    sections: [
      { title: "Types", items: ["default", "danger", "success", "warning"].map((t) => ({ label: cap(t), props: { type: t } })) },
      { title: "With icons", description: "Leading icon, trailing close icon, or both.",
        rows: [{ label: "Lead icon", props: { leadIcon: "check" } }, { label: "Closable", props: { closable: true } }, { label: "Both", props: { leadIcon: "check", closable: true } }],
        cols: ["default", "danger", "success", "warning"].map((t) => ({ label: cap(t), props: { type: t } })) },
    ],
    props: [
      { name: "type", type: '"default" | "danger" | "success" | "warning"', default: '"default"', description: "Colour meaning." },
      { name: "leadIcon", type: "IconName | null", default: "null", description: "Icon before the text." },
      { name: "closable", type: "boolean", default: "false", description: "Shows the close icon; pair with onRemove." },
    ],
    tokenPrefix: "--tag-",
    usage: { do: ["Use for short status or category text.", "Pair colour with text — never colour alone."], dont: ["Don't write sentences in a tag.", "Don't use Danger for non-critical info."] },
    a11y: ["The close control is a real <button> with aria-label=\"Remove\"."],
    specs: [{ label: "Padding", value: "4px 8px" }, { label: "Radius", value: "Pill (999)" }, { label: "Text", value: "12/16 Medium" }],
  },
  {
    slug: "badge",
    name: "Badge",
    description: "Small circular counter or indicator, usually attached to another element.",
    Component: Badge,
    controls: [
      { name: "children", type: "text", default: "3" },
      { name: "type", type: "select", options: ["default", "success", "warning", "danger"], default: "default" },
    ],
    sections: [{ title: "Types", items: ["default", "success", "warning", "danger"].map((t) => ({ label: cap(t), props: { type: t } })) }],
    props: [
      { name: "type", type: '"default" | "success" | "warning" | "danger"', default: '"default"', description: "Colour meaning." },
      { name: "children", type: "ReactNode", default: '"3"', description: "Usually a number (1–2 characters)." },
    ],
    semanticTokens: ["--color-surface-brand-strong", "--color-surface-success-strong", "--color-surface-warning-strong", "--color-surface-error-strong", "--color-text-inverse", "--color-text-on-warning"],
    usage: { do: ["Keep content to 1–2 characters.", "Cap large numbers (\"9+\")."], dont: ["Don't use as a button.", "Don't rely on colour alone to convey urgency."] },
    a11y: ["Add visually-hidden text (\"3 unread messages\") next to the number."],
    specs: [{ label: "Size", value: "24px circle" }, { label: "Text", value: "12/16 Medium" }],
  },
  {
    slug: "status",
    name: "Status",
    description: "A dot that shows availability: online, away, busy or offline.",
    Component: Status,
    controls: [
      { name: "type", type: "select", options: ["online", "away", "busy", "offline"], default: "online" },
      { name: "size", type: "select", options: ["sm", "md", "lg"], default: "md" },
    ],
    sections: [{ title: "Types × sizes",
      rows: ["online", "away", "busy", "offline"].map((t) => ({ label: cap(t), props: { type: t } })),
      cols: [{ label: "Small (4px)", props: { size: "sm" } }, { label: "Medium (6px)", props: { size: "md" } }, { label: "Large (8px)", props: { size: "lg" } }] }],
    props: [
      { name: "type", type: '"online" | "away" | "busy" | "offline"', default: '"online"', description: "Availability." },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "4px / 6px / 8px dot." },
    ],
    semanticTokens: ["--color-surface-success-strong", "--color-surface-warning-strong", "--color-surface-error-strong", "--color-surface-strong"],
    usage: { do: ["Place on an Avatar's bottom-right corner."], dont: ["Don't use alone without a text equivalent nearby."] },
    a11y: ["Exposed as role=\"img\" with the status as aria-label."],
    specs: [{ label: "Sizes", value: "4 / 6 / 8px" }],
  },
  {
    slug: "avatar",
    name: "Avatar",
    description: "Represents a person with an image or initials, with an optional status dot.",
    Component: Avatar,
    controls: [
      { name: "initials", type: "text", default: "AB" },
      { name: "size", type: "select", options: ["xsm", "sm", "md", "lg"], default: "md" },
      { name: "status", type: "select", options: ["none", "online", "away", "busy", "offline"], default: "none" },
    ],
    sections: [
      { title: "Sizes", items: [["xsm", "24px"], ["sm", "32px"], ["md", "40px"], ["lg", "54px"]].map(([s, px]) => ({ label: `${s} · ${px}`, props: { size: s } })) },
      { title: "With status", rows: ["online", "away", "busy", "offline"].map((t) => ({ label: cap(t), props: { status: t } })),
        cols: [["xsm", "24px"], ["sm", "32px"], ["md", "40px"], ["lg", "54px"]].map(([s, px]) => ({ label: `${s} · ${px}`, props: { size: s } })) },
    ],
    props: [
      { name: "initials", type: "string", default: '"AB"', description: "Fallback when there is no image." },
      { name: "src", type: "string", default: "undefined", description: "Image URL." },
      { name: "size", type: '"xsm" | "sm" | "md" | "lg"', default: '"md"', description: "24 / 32 / 40 / 54px." },
      { name: "status", type: "StatusType | null", default: "null", description: "Shows a Status dot." },
    ],
    semanticTokens: ["--color-surface-brand-subtle", "--color-text-brand-strong", "--color-border-brand-soft"],
    usage: { do: ["Use initials when no photo exists."], dont: ["Don't use more than 2 initials."] },
    a11y: ["Images are decorative (alt=\"\"); put the person's name in adjacent text."],
    specs: [{ label: "Sizes", value: "24 / 32 / 40 / 54px" }, { label: "Status dot", value: "4 / 4 / 6 / 8px" }],
  },
  {
    slug: "alert",
    name: "Alert",
    description: "Inline message that communicates status. Four types with title, subtitle and optional close.",
    Component: Alert,
    controls: [
      { name: "title", type: "text", default: "Alert title" },
      { name: "subtitle", type: "text", default: "Supporting text explains what happened." },
      { name: "type", type: "select", options: ["default", "success", "warning", "error"], default: "default" },
      { name: "closable", type: "boolean", default: true },
    ],
    sections: [
      { title: "Types", items: ["default", "success", "warning", "error"].map((t) => ({ label: cap(t), props: { type: t, title: `${cap(t)} alert`, subtitle: "Supporting text explains what happened.", closable: true } })) },
      { title: "Without close / subtitle", items: [
          { label: "Title only", props: { type: "success", title: "Changes saved" } },
          { label: "No close icon", props: { type: "warning", title: "Storage almost full", subtitle: "You have used 92% of your plan." } },
        ] },
    ],
    props: [
      { name: "type", type: '"default" | "success" | "warning" | "error"', default: '"default"', description: "Colour meaning and lead icon." },
      { name: "title", type: "string", default: '"Alert title"', description: "Main message." },
      { name: "subtitle", type: "string", default: "undefined", description: "Supporting text." },
      { name: "closable", type: "boolean", default: "false", description: "Shows the close icon; pair with onClose." },
    ],
    tokenPrefix: "--alert-",
    usage: { do: ["Say what happened and what to do next.", "Use Error only when action is needed."], dont: ["Don't stack more than two alerts.", "Don't auto-dismiss errors."] },
    a11y: ["Error uses role=\"alert\"; the others use role=\"status\".", "The close control is a real button with aria-label=\"Dismiss\"."],
    specs: [{ label: "Width", value: "424px" }, { label: "Padding", value: "20px 12px" }, { label: "Radius", value: "8px" }],
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    description: "A small card that explains an element. This is the tooltip surface; position it with your own trigger logic.",
    Component: Tooltip,
    controls: [
      { name: "title", type: "text", default: "Tooltip title" },
      { name: "subtitle", type: "text", default: "A short explanation of the element." },
      { name: "icon", type: "boolean", default: true },
    ],
    sections: [{ title: "Variants", items: [
      { label: "Title + subtitle", props: { title: "Tooltip title", subtitle: "A short explanation of the element." } },
      { label: "Title only", props: { title: "Copy to clipboard", subtitle: undefined } },
      { label: "No icon", props: { title: "Tooltip title", subtitle: "A short explanation.", icon: false } },
    ] }],
    props: [
      { name: "title", type: "string", default: '"Tooltip title"', description: "Main text." },
      { name: "subtitle", type: "string", default: "undefined", description: "Supporting text." },
      { name: "icon", type: "boolean", default: "true", description: "Shows the info icon." },
    ],
    tokenPrefix: "--tooltip-",
    usage: { do: ["Keep it to one or two lines.", "Show on hover and keyboard focus."], dont: ["Don't put interactive content inside.", "Don't hide essential information in a tooltip."] },
    a11y: ["Renders role=\"tooltip\"; connect it to its trigger with aria-describedby."],
    specs: [{ label: "Width", value: "280px" }, { label: "Padding", value: "8 12 12 12" }, { label: "Radius", value: "8px" }],
  },
];

export const getDoc = (slug: string) => registry.find((c) => c.slug === slug);
export const defaultsOf = (c: ComponentDoc): Props =>
  Object.fromEntries(c.controls.map((x) => [x.name, x.default]));
