function findNaughtyStep(original: string, modified: string) {
  const modifiedArray = modified.split("");
  const modifiedString = original.length;
  const originalString = modifiedArray.length;
  let result: string = "";

  modifiedArray.find((letter: string, index: number) => {
    if (original[index] !== letter) {
      result = originalString < modifiedString ? original[index] : letter;
      return result;
    }
  });

  return result;
}
