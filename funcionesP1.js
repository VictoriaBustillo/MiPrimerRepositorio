//Declaracion de una funcion
function multiplica( primerOperando, segundoOperando  ){
    var resultado = primerOperando * segundoOperando;
    console.log( "El resultado es: "+ resultado);
}
multiplica( 25, 2 );

function multiplicaN3(){
    var resultado2 = 12 * 12;
    console.log("El resultado es: " + resultado2 );
}
multiplicaN3();
//Funcion como exprecion
var resultado = function multiplicaN2(primerOperando){
        //2*25 --> 50
        //resultado = 50
    return 2 * primerOperando;
}
console.log( resultado(25) );

//Funcion flecha
//funcion que saluda a una persona
const prompt = require("prompt-sync")();
const saludaPersona = ( nombre ) => console.log("Feliz Cumple "+ nombre );
saludaPersona( prompt("Escribe tu nombre "));
const suma = ( numero ) => console.log( numero*2 )
suma(12);

//Ejercicio #1
//Escribir un programa que tenga una funcion a la que
//se le pasa como parametro un numero y devuelve como 
//resultado un teto que indica si el numero es par o impar

function determinaNumero( numero ){
    if( (numero % 2) == 1){
        console.log("El numero es impar ")
    }
    else if((numero % 2) == 0){
        console.log( "El numer es par")
    }
}
determinaNumero( 345223 );

//Ejercicio #2
//Definir una funcion que muestre la informacion de un texto 
//que se introduce omo argumento y determinar si el texto 
//contiene mayusculas, minusculas o ambas


function determinaTexto( texto ){
    if( texto==texto.toUpperCase() ){
        console.log( "El texto esta en mayusculas" );
    }
    else if( texto==texto.toLowerCase() ){
        console.log("El texto esta en minusculas");
    }
    else{
        console.log("El texto tiene mayusculas y minusculas")
    }
}
determinaTexto(prompt("Ingresa un texto "));















