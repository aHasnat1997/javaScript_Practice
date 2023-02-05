// Fahrenheit and then convert it into Celsius

function temperatureConverter(valNum) {

  const fahrenheit = valNum;
  const convertCelsius = (fahrenheit - 32)/1.8;

  const coelsius = parseFloat(convertCelsius.toFixed(2));

    return coelsius;
}

console.log(temperatureConverter(50));


