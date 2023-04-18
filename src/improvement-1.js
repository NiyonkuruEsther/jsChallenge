/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
export default function countRobots(list) {
  var robotsCounter = 0;
  if (Array.isArray(list)) {
    throw new Error("Invalid input! Please retry with an array input");
  }
  for (const item of list) {
    if (item === "R") {
      robotsCounter++;
    }
  }
  return robotsCounter;
}
