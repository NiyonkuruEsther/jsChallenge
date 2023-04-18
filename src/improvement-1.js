/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
export default function cntRbt(list) {
  var count = 0;
  if (Array.isArray(list)) {
    throw new Error ("Invalid input! Please retry with an array input")
  }
  for (var i = 0; i < list.length; i++) {
    if (list[i] == "R") {
      count++;
    }
  }
  return count;
}
