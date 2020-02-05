function arrayAnalysis(arr) {
    let object = {
        average: getAverage(arr),
        min: getMin(arr),
        max: getMax(arr),
        length: getLength(arr),
    };
    return object;
}

function getAverage(arr) {
    let sum = arr.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    let average = sum / arr.length;
    return average;
}

function getMin(arr) {
    const min = Math.min(...arr);
    return min;
}

function getMax(arr) {
    const max = Math.max(...arr);
    return max;
}

function getLength(arr) {
    const length = arr.length;
    return length;
}

module.exports = arrayAnalysis;
