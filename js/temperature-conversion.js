var temperature = function(){
var fahrenheit = parseInt(prompt("enter the temperature in Fahrenheit"));

var result = (fahrenheit - 32) * .5556;
alert ("Your temperature in Celsius is " + result.toFixed(1) + "\xB0.");
}
temperature();
