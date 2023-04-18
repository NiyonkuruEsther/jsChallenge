export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);
  // /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/

  const validatePassword = /^(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]{10}$/;
  let validateUniqnessOfCharacters = new Set([...password]);
  if (
    forbiddenPasswords.includes(password) ||
    !/[A-Z]/.test(password) ||
    !/[a-z]/.test(password) ||
    validateUniqnessOfCharacters.size < 4
  ) {
    return false;
  } else {
    if (validatePassword.test(password)) {
      return true;
    } else {
      return false;
    }
  }

  // * * * YOUR CODE GOES IN HERE ... * * *
  /*
   * if (password is not exactly 10 digits or characters...) {
   *   return ...;
   * }
   *
   * if (is not composed by digits and numbers) {
   *   return ...;
   * }
   */
  // const setOfPassword = new Set([...password]);
  // if (setOfPassword.size < 4) return false;
  // return true;
}
