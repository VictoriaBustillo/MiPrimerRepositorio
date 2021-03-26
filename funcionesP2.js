//Ejercicio #1
//Escribir un programa que obtenga el
//precio de un producto, y calcule el
//precio total, ya que tambien se va a 
//cobrar el costo de envio unicamente
//si el precio del producto es mayor o
//igual a $399

const prompt = require("prompt-sync")();

//var nombreProducto = prompt("Escriba el nombre del producto ");
//var precioProducto = prompt("Escriba el precio: ");
function precioTotal( precio, nombreProducto){
    var resultado = 0;
    if( precio <= 399 ){
        console.log("Factura");
        console.log("Costo del "+nombreProducto+" es "+ precio);
        console.log("Costo de envio: "+ 100)
        resultado = parseInt(precio) + 100;
        console.log(nombreProducto+" cuesta "+ resultado  );
    }
    else if(precio > 399 ){
        resultado = precio;
        console.log( nombreProducto+" cuesta "+ resultado );
    }
}
//precioTotal( precioProducto, nombreProducto);

//Ambito de una funcion
function ambitoVar(){
    const i = 1;
    if( i == 1 ){
        var variableVar = "Ambito de variable"
    }
    console.log( variableVar );
}
//ambitoVar();
//console.log( variablVar ); --> Error

//let- forma moderna de var(var=let(masomenos))
let nombre = "Luis";
nombre = "Pablo";
//console.log(nombre);

function ambitoLet(){
    const i = 1;
    if( i == 1){
        let variableLet = "Ambito de variable - Let"
        console.log(variableLet);
    } 
}
//ambitoLet();
//console.log (variableLet );

var mensaje = "texto";
function mensajeFuncion(){
    var mensaje = "texto 2";
    console.log( mensaje ); 
}

console.log( mensaje );
mensajeFuncion();
console.log( mensaje );