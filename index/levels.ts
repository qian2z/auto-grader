export const essay_levels: {
  id: number;
  items: { label: string; value: string }[];
  label?: string;
}[] = [
  {
    id: 1,
    items: [
      {
        label: "Primary Level",
        value: "primary level",
      },
    ],
  },
  {
    id: 2,
    items: [
      {
        label: "Secondary Level",
        value: "secondary level",
      },
    ],
  },
  {
    id: 3,
    items: [
      {
        label: "Undergraduate Level",
        value: "undergraduate level",
      },
    ],
  },
  {
    id: 4,
    label: "IELTS",
    items: [
      {
        label: "Academic Writing Task 1",
        value: "IELTS Academic Writing Task 1",
      },
      {
        label: "Academic Writing Task 2",
        value: "IELTS Academic Writing Task 2",
      },
      {
        label: "General Training Writing Task 1",
        value: "IELTS General Training Writing Task 1",
      },
      {
        label: "General Training Writing Task 2",
        value: "IELTS General Training Writing Task 2",
      },
    ],
  },
  {
    id: 5,
    label: "TOEFL",
    items: [
      {
        label: "Independent Writing Task",
        value: "TOEFL Independent Writing Task",
      },
    ],
  },
  {
    id: 6,
    label: "GRE",
    items: [
      {
        label: "Analytical Writing - Issue Task",
        value: "GRE Analytical Writing - Issue Task",
      },
      {
        label: "Analytical Writing - Argument Task",
        value: "GRE Analytical Writing - Argument Task",
      },
    ],
  },
];
