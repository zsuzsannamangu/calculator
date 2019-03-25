var add = function(number1, number2) {
  return number1 + number2;
}

var subtract = function(number1, number2) {
  return number1 - number2;
}

var multiply = function(number1, number2) {
  return number1 * number2;
}

var divide = function(number1, number2) {
  return number1 / number2;
}

// var number1 = parseInt(prompt("Enter a number:"));
//
// var number2 = parseInt(prompt("Enter another number:"));

// alert(add(number1, number2));
//
// alert(subtract(number1, number2));
//
// alert(multiply(number1, number2));
//
// alert(divide(number1, number2));
//
// var height = parseFloat(prompt("what is your height in inches?"));
// var weight = parseFloat(prompt("what is your weight in pounds?"));
//
// var bmi = function(height, weight) {
//   return ((weight*.45)/((height*.025)*(height*.025))).toFixed();
// }
//
// alert(bmi(height,weight));

var celcius = parseFloat(prompt("What is the temperature in Celcius?"));

var fahrenheit = function(celcius) {
  return (celcius*1.8)+32;
}

alert(fahrenheit(celcius));
