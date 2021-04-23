console.log("Secuencia de Fibonacci");
var max = parseInt(
  prompt("Ingrese cuantos valores de la secuencia de Fibonacci quiere ver")
);

var anterior = 1;
var actual = 1;
//Tip: Como los primeros dos valores no son operados, es buena idea mostrarlos desde el comienzo
console.log("f0) 0");
console.log("f1) 1");
console.log("f2) 1");

for (var i = 3; i <= max; i++) {
  var aux = actual;
  actual = actual + anterior;

  console.log("f" + i + ") " + anterior + " + " + aux + " = " + actual);

  anterior = aux;
}
