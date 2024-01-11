export const scoring_scales: {
  id: number;
  scale: string;
  value: string;
  point: "half" | "one";
}[] = [
  { id: 1, scale: "0 - 9", value: "9", point: "half" },
  { id: 2, scale: "0 - 6", value: "6", point: "half" },
  { id: 3, scale: "0 - 30", value: "30", point: "one" },
  { id: 4, scale: "0 - 100", value: "100", point: "one" },
];
