const fibonacci = function(n) {

    if (n == 0) {
        return 0;
    } else if (n < 0) {
        return "OOPS";
    }

    const fib = [1, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return parseInt(fib.slice(n - 1));    
};

// Do not edit below this line
module.exports = fibonacci;
