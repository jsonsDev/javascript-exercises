const convertToCelsius = function(fromFahrenheit) {
  let toCelsius = (fromFahrenheit - 32) * 5 / 9;
  if (toCelsius % 1 !== 0) {
    return parseFloat(toCelsius.toFixed(1));
  } else {
    return toCelsius;
  }
};

const convertToFahrenheit = function(fromCelsius) {
  let toFahrenheit = (fromCelsius * 9 / 5 + 32);
  if (toFahrenheit % 1 !== 0) {
    return parseFloat(toFahrenheit.toFixed(1));
  } else {
    return toFahrenheit;
  }
};

convertToCelsius(32);
convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
