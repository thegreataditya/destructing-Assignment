const input = [
  1, 2, 3, 2, 4, 3, 4, 55, 66, 76, 2, 54, 55, 45, 66, 67, 90, 105, 66, 67, 105,
  20, 25, 1, 34,
];

function uniqueNumbers(inp) {
  const uniqueNumbersSet = new Set(inp);
  return uniqueNumbersSet;
}

console.log(uniqueNumbers(input));