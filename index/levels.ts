export const essay_levels: { id: number; items: string[]; label?: string }[] = [
  { id: 1, items: ["Primary Level"] },
  { id: 2, items: ["Secondary Level"] },
  { id: 3, items: ["Undergraduate Level"] },
  {
    id: 4,
    label: "IETLS",
    items: [
      "Academic Writing Task 1",
      "Academic Writing Task 2",
      "General Training Writing Task 1",
      "General Training Writing Task 2",
    ],
  },
  {
    id: 5,
    label: "TOEFL",
    items: [
      "Integrated Writing Task",
      "Independent Writing Task",
      "Academic Discussion Task",
    ],
  },
  {
    id: 6,
    label: "GRE",
    items: [
      "Analytical Writing - Issue Task",
      "Analytical Writing - Argument Task",
    ],
  },
];
