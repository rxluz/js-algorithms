/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  //stores the original position
  const orignPos = {
    horizontal: 0,
    vertical: 0,
  };

  //function to move to left and right
  const moveHorizontal = v => {
    if (v === "L" || v === "R") {
      return v === "R" ? 1 : -1;
    }

    return 0;
  };

  //function to move up and down
  const moveVertical = v => {
    if (v === "U" || v === "D") {
      return v === "U" ? 1 : -1;
    }

    return 0;
  };

  //calculates the new position of the robot
  const newPos = moves.split("").reduce(
    (accum, value) => ({
      horizontal: moveHorizontal(value) + accum.horizontal,
      vertical: moveVertical(value) + accum.vertical,
    }),
    orignPos,
  );

  //if the new position is the same of old position, returns true
  return JSON.stringify(orignPos) === JSON.stringify(newPos);
};
