function add(num1, num2) {
    let result = num1 + num2;
    return result;
  }
sum = add(23,54)
document.getElementById("sum").innerHTML = sum

function subtract(num1, num2) {
    let result = num1 - num2;
    return result;
  }
  sub = subtract(23,54)
document.getElementById("sub").innerHTML = sub

  function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }
  pro = multiply(23,54)
document.getElementById("pro").innerHTML = pro

  function divide(num1, num2) {
    let result = num1 / num2;
    return result;
  }
  div = divide(23,54)
document.getElementById("div").innerHTML = div

function toCelsius(f) {
    return (5/9) * (f-32);
  }
  document.getElementById("temp").innerHTML = toCelsius