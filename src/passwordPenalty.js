/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  // * * * INSERT YOUR CODE HERE * * * * * * * * * * * * * *
  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  //
// Why not working
  let maxChar = 0;
  let currentChar = 0;

  for (let i = 1; i < password.length; i++) {
    if (password.charCodeAt(i) === password.charCodeAt(i - 1) + 1) {
      currentChar++;
      maxChar = Math.max(maxChar, currentChar);
    } else {
      currentChar = 0;
    }
  }
  console.log(
    `Password: ${password} -> Penalty points: ${maxChar} ${
      maxChar >= 3 ? 2 : maxChar === 2 ? 1 : 0
    }`
  );

  if (maxChar >= 3) {
    return 2;
  } else if (maxChar === 2) {
    return 1;
  } else {
    return 0;
  }
}
// Testing pushing
