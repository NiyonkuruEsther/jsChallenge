/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"

  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  // * * * INSERT YOUR CODE HERE * * * * * * * * * * * * * *
  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  //
  if (typeof password !== "string") password = String(password);
  if (!password || password === "" || password == "null") {
    return 0;
  } else {
    let res = 0;
    let regexNumber = /(\d)\1+/;
    let regexLetter = /(\w)\1+/;
    let findDublpsNumber = password.match(regexNumber);
    let findDublpslettel = password.match(regexLetter);
    if (findDublpsNumber && findDublpslettel) {
      res = res + findDublpsNumber[0].length + findDublpslettel[0].length;
    }
    if (findDublpsNumber) {
      res = res + findDublpsNumber[0].length;
    }
    if (findDublpslettel) {
      res = res + findDublpslettel[0].length;
    }
    if (res === 0) {
      return 0;
    } else if (res <= 2) {
      return 1;
    } else {
      return 2;
    }
  }
}
