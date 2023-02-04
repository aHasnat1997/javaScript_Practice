function fahrenheitToCelsius(temp) {
  let convart = ((temp - 32) * (5 / 9));
  return convart;
}

function celsiusToFahrenheit(temp) {
  let convart = ((temp * (9 / 5)) + 32);
  return convart;
}

console.log(fahrenheitToCelsius(69));
console.log(celsiusToFahrenheit(53));



