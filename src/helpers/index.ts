export const reduceText = (text: string, seeAll: boolean) => {
  return text.length > 400 && !seeAll ? text.substring(0, 400) + '...' : text;
};
