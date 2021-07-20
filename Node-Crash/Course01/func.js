const { odd, even } = require("./var");

function checkEvenOrOdd(num) {
  if (num % 2) {
    return odd;
  }
  return even;
}

module.exports = checkEvenOrOdd;
