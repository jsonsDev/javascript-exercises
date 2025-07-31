const reverseString = function(str) {
    const arr = str.split('');
    let reversed = arr.reverse();
    return reversed.join("");
};

reverseString('hello there') // returns 'ereht olleh'

// Do not edit below this line
module.exports = reverseString;
