function cyberReindeer(road: string, time: number) {
  const characters = {
    santa: "S",
    closedBarrier: "|",
    openBarrier: "*",
    floor: ".",
  };

  // special characters to use
  const { santa, closedBarrier, openBarrier, floor } = characters;

  // config
  let roadCopy = road.replace(santa, floor).split(""); // copy of each original road character
  const conditionToOpenBarriers: number = 5;
  let santaPosition: number = 0;
  let timeUnit: number = 1;
  let result: string[] = [road]; // includes the first road

  while (timeUnit < time) {
    let nextPosition = santaPosition + 1; // next character to santa position
    let newRoadStep: string;

    if (timeUnit === conditionToOpenBarriers) {
      let roadToUpdate = roadCopy.join(""); // string of the road
      const closedBarriers = new RegExp(`\\${closedBarrier}`, "g"); // select all "|" characters (closed barriers)
      roadToUpdate = roadToUpdate.replace(closedBarriers, openBarrier); // change them for "*" (open barriers)
      roadCopy = roadToUpdate.split("");
    }

    let updatedRoad: string[] = roadCopy.slice(); // use a original copy for each step

    if (roadCopy[nextPosition] !== closedBarrier) {
      updatedRoad[nextPosition] = santa; // santa moves forward
      newRoadStep = updatedRoad.join("");
      santaPosition++;
    } else {
      // use the last road step saved
      newRoadStep = result[result.length - 1];
    }

    // save and next step
    result.push(newRoadStep);
    timeUnit++;
  }

  return result;
}
