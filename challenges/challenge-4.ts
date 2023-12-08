function decode(message: string) {
  // TODO: Investigate advanced use of regex and implement it.
  // TODO: Refactor code

  const messageCharacters: string[] = message.split("");

  // nesting options
  let nestedCharactersInLevel1: string[] = [];
  let nestedCharactersInLevel2: string[] = [];
  let nestingLevel: number = 0;

  let result: string = "";

  messageCharacters.map((character: string) => {
    // if there is an opening parenthesis
    if (character === "(") {
      // increases the nesting level (min 1, max 2)
      nestingLevel++;
      return;
    }

    // if there is an closing parenthesis
    if (character === ")") {
      if (nestingLevel === 1) {
        // reverse the order and extract a string with the characters in the correct order.
        const characters = nestedCharactersInLevel1.reverse().join("");
        result += characters;
        // clear the array in case there is another nesting of the same level
        nestedCharactersInLevel1 = [];
      }
      if (nestingLevel === 2) {
        // extract a string with the characters in the correct order.
        const characters = nestedCharactersInLevel2.join("");
        // is added to the level 1 nested array
        nestedCharactersInLevel1.push(characters);
        // clear the array in case there is another nesting of the same level
        nestedCharactersInLevel2 = [];
      }
      // decrease the nesting level (min 0)
      nestingLevel--;
      return;
    }

    switch (nestingLevel) {
      case 0:
        // add the character to the resulting string
        result += character;
        break;

      case 1:
        // add the character to the level 1 nested array
        nestedCharactersInLevel1.push(character);
        break;

      case 2:
        // add the character to the level 2 nested array
        nestedCharactersInLevel2.push(character);
        break;
    }
  });

  return result;
}
