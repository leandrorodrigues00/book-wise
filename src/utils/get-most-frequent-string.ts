// Learn more about it in the docs: https://plainenglish.io/blog/how-to-find-the-most-frequent-element-in-an-array-in-javascript-c85119dc78d2

export const getMostFrequentString = (arr: string[]) => {
  const hashmap = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  return Object.keys(hashmap).reduce((a, b) =>
    hashmap[a] > hashmap[b] ? a : b
  );
};
