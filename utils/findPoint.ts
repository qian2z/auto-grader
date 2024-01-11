import { scoring_scales } from "@/index/scales";

export function getPointByValue(value: string) {
  const foundItem = scoring_scales.find((item) => item.value === value);
  return foundItem ? foundItem.point : "one";
}
