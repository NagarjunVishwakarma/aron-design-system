// Typography, grids etc. exported from the Figma file ("Final Design System" page).
export type TypeStyle = { name: string; size: number; line: number; weights: string[] };

export const webType: TypeStyle[] = [
  { name: "Display 1", size: 44, line: 54, weights: ["Regular", "Medium", "Semi-bold"] },
  { name: "Display 2", size: 36, line: 44, weights: ["Regular", "Medium", "Semi-bold"] },
  { name: "Heading 1", size: 28, line: 34, weights: ["Regular", "Medium", "Semi-bold"] },
  { name: "Heading 2", size: 24, line: 30, weights: ["Regular", "Medium", "Semi-bold"] },
  { name: "Heading 3", size: 20, line: 24, weights: ["Regular", "Medium", "Semi-bold"] },
  { name: "Heading 4", size: 18, line: 22, weights: ["Regular", "Medium", "Semi-bold"] },
  { name: "Body 1", size: 16, line: 24, weights: ["Regular", "Medium", "Semi-bold"] },
  { name: "Body 2", size: 14, line: 22, weights: ["Regular", "Medium", "Semi-bold"] },
  { name: "Label 1", size: 12, line: 16, weights: ["Regular", "Medium", "Semi-bold"] },
  { name: "Label 2", size: 10, line: 14, weights: ["Regular", "Medium", "Semi-bold"] },
];
export const mobileType: TypeStyle[] = [
  { name: "Display", size: 24, line: 30, weights: ["Regular", "Medium", "Semi-bold"] },
  { name: "Heading 1", size: 20, line: 24, weights: ["Regular", "Medium", "Semi-bold"] },
  { name: "Heading 2", size: 18, line: 22, weights: ["Regular", "Medium", "Semi-bold"] },
  { name: "Label 3", size: 8, line: 12, weights: ["Regular", "Medium", "Bold"] },
];
export const weightValue: Record<string, number> = { Regular: 400, Medium: 500, "Semi-bold": 600, Bold: 700 };

export const grids = [
  { name: "Mobile", columns: 4, gutter: 8, margin: 16 },
  { name: "Tablet", columns: 6, gutter: 16, margin: 40 },
  { name: "Desktop", columns: 12, gutter: 20, margin: 40 },
];
