let minAndMax = (...args) => {
    const min = Math.min(...args);
    const max = Math.max(...args);
    let maxMin = {
        max: max,
        min: min
    }
    return maxMin;
}

console.log(minAndMax(1,2,3,4,5,7,9,1005, 5000));