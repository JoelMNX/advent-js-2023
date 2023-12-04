function findFirstRepeated(gifts: number[]) {
  let defaultValue: number = -1;
  let differentGifts: number[] = [];

  for (const gift of gifts) {
    const isGiftRepeated = differentGifts.includes(gift);
    if (!isGiftRepeated) differentGifts.push(gift);
    else return gift;
  }

  return defaultValue;
}
