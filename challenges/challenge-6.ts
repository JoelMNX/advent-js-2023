function maxDistance(movements: string) {
  const characters = movements.split("");
  let rightMoves: number = 0;
  let leftMoves: number = 0;
  let leftOrRightMoves: number = 0;

  characters.map((character: string) => {
    if (character === "<") {
      leftMoves++;
    } else if (character === ">") {
      rightMoves++;
    } else if (character === "*") {
      leftOrRightMoves++;
    }
  });

  if (leftMoves > rightMoves) {
    return leftMoves + leftOrRightMoves - rightMoves;
  } else {
    return rightMoves + leftOrRightMoves - leftMoves;
  }
}
