let accessElements = (...arr) => {
  const [x, y, ...rest] = arr;
  let arr2 = [x, y, rest[rest.length - 1]];
  return arr2;
};

console.log(accessElements(1, 2, 3, 4, 5, 6));