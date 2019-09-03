//1 
document.write("la Fecha y hora es: ");
document.write("<br> ");
var fecha = new Date();
document.write(fecha); 



//2
document.write("<br> ");
var nombre;
var edad;
nombre = prompt("¿Ingresa tu nombre?");
edad = prompt("¿Ingresa tu EDAD?");
document.write("Su nombre y edade es" + " " + nombre + " " + edad);
console.log("Su nombre y edade es" + " " + nombre + " " + edad);


//3
document.write(" " + " ");
var areglo = ["Lunes", "Martes", "Miercoles","Jueves","Viernes","Sabado","Domingo"];

console.log(areglo);
//4
document.write("<br> ");
document.write(" " + " ");
var areglo2 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
document.write("    " + "El areglo La semana tiene" + " "+ areglo2.length +" "+ "Dias");
document.write("<br> ");
//5 suma
function suma() {
    var num1 = Number(document.getElementById("n1").value);
    var num2 = Number(document.getElementById("n2").value);
    var res = num1 + num2;
    document.getElementById("sum").value = res;

}
//6resta
function resta() {
    var num3 = Number(document.getElementById("n3").value);
    var num4 = Number(document.getElementById("n4").value);
    var res = num3 - num4;
    document.getElementById("res").value = res;

}
//7 
alert('Bienvenido') ;
//8
function myFunction() {
    document.getElementById("demo").innerHTML = "Hola mundo.";
}
//9
var tiempo = 50;
function contador() {
    tiempo = tiempo - 1;
    document.formulario.reloj.value = tiempo;
}

setInterval("contador()", 1000); 
//10


var numero1 = 5;
var numero2 = 8;

if (numero1==1) {
    console.log("numero1 no es mayor que numero2");
}
if (numero1 == 5) {
    console.log("numero2 es positivo");
}
if (numero1 == 8) {
    console.log("numero1 es negativo o distinto de cero");
}
if (numero1 == 10) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}



