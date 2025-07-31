const sumAll = function(lowerNumber, upperNumber) {
    if (lowerNumber < 0) return "ERROR";
    if (!Number.isInteger(lowerNumber) || !Number.isInteger(upperNumber)) return "ERROR";
    let sum = 0;
    const start = Math.min(lowerNumber, upperNumber);
    const end = Math.max(lowerNumber, upperNumber);
    
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10

// Do not edit below this line
module.exports = sumAll;
