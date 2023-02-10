document.getElementById("demo").innerHTML = Number(Math.PI) // .innerHTML is used to overwrite the content present in that ID
// document.querySelector('#demo')
document.getElementById("demo2").innerHTML = Number("3.14")
document.getElementById("demo3").innerHTML = Number("adhya") // returns NaN as the string contains char
document.getElementById("demo2").innerHTML = Number("a1")
document.getElementById("demo4").innerHTML = String(1323)
document.getElementById("demo5").innerHTML = String(Math.PI)
let num1 = 1987
document.getElementById("demo6").innerHTML = String(num1)
document.getElementById("demo7").innerHTML = (43).toString()
document.getElementById("demo8").innerHTML = (345.2684).toExponential()
document.getElementById("demo9").innerHTML = (345.2684).toFixed()
document.getElementById("demo10").innerHTML = (345.2684).toPrecision()
const d1 = new Date();
console.log(d1)
document.getElementById("demo11").innerHTML = d1
const result = d1.getTime()
console.log(result)
document.getElementById("demo11").innerHTML = result