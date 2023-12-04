function manufacture(gifts: string[], materials: string) {
  return gifts.filter((gift: string) => {
    for (const letter of gift) {
      if (!materials.includes(letter)) return;
    }
    return true;
  });
}
