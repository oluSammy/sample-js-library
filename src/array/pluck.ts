export const pluck = (elements: Record<string, any>[], field: string) => {
  return elements.map((element) => element[field]);
};
