/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

// Math.floor(Math.random() * (6 - 1 + 1)) + 1;

// Call the function and pass it different values
var number1 = parseInt(prompt("number1"))
var number2 = parseInt(prompt("number2"))

const randomNumber = (number1, number2) => {
    var nmbr = Math.floor(Math.random() * (number1 - number2 + 1)) + number2;
    return nmbr
}

console.log(randomNumber(number1, number2))