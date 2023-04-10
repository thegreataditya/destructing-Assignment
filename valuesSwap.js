let valuesSwap = (x, y) => {
    [y, x] = [x, y];
    let arr = [x, y];
    return arr;
}

console.log(valuesSwap(7, 50));