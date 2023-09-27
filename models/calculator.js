/* 
  This file isn't used on the project itself. But for history purposes I've
  decided to keep it.
*/

/**
 * Adds two numbers.
 *
 * This function takes two numbers as input and returns their sum. If either of
 * the input values is not a valid number, it returns an error message.
 *
 * @param {number} firstNumber - The first number to be added.
 * @param {number} secondNumber - The second number to be added.
 *
 * @returns {number|string} The sum of the two numbers, or an error message if
 * either input is not a valid number.
 *
 * @example
 * // Adding two valid numbers
 * const result = add(5, 3); // Returns 8
 *
 * // Adding a valid number and an invalid value
 * const result = add(5, "abc"); // Returns "Error"
 * const result = add(5, null); // Returns "Error"
 * const result = add(5, undefined); // Returns "Error"
 *
 * // Adding two invalid values
 * const result = add("xyz", "abc"); // Returns "Error"
 */
function add(firstNumber, secondNumber) {
  if (isInvalidNumber(firstNumber) || isInvalidNumber(secondNumber)) {
    return "Error";
  }

  return firstNumber + secondNumber;
}

function isInvalidNumber(number) {
  return typeof number !== "number";
}

exports.add = add;
