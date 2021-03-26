//operadores aritmeticos
//Operador +
var operando1 = 5000;
var operando2 = 10000;
var resultado = operando1 + operando2;
console.log( resultado);
 //Operador *
 var operandoN1 = 12;
 var operandoN2 = 2;
 var resultado2 = operandoN1 * operandoN2;
 console.log( resultado );

 //Operador /
 var resultado3 = operandoN2 / operandoN1;
 console.log( "el resultado de tu divicion es :" + resultado3 );

 //Operador ++
 resultado3 ++;
 console.log( "Incrementando la variable resultado3" + resultado3 );
  
 //Operador --
 resultado3 --;
 console.log( resultado3);

 //Operadores de asignacion
 //Operador =
 operandoN1 = operandoN2
 console.log( operandoN1 );
 //Operador +=
 operandoN1 += operandoN2;
 //operacion completa
 //operandoN1 = operandoN1 + operandoN2;
 console.log( operandoN1 );

 //operadores de comparacion
 //operador =
 var nComparacion1 = 5;
 var nComparacion2 = 10;
 var resultadoComparacion = ( nComparacion1 > nComparacion2 );
 console.log( resultadoComparacion );

 //operadores Logicos
 //Resultado operador &&
//true && true --> true
// false && false --> false
//true && false --> false
//false && true -->

//Resultado operador || - O
// true|| true --> true
// false || false --> false
// false || true --> true
// true || false -->true
//Variables
var oplN1 = 5;
var oplN2 = 50;
var oplN3 = 30;

// Operador && ("AND" o "Y")
var resultadoOperadorLogico = ( oplN1 < oplN2 ) && ( oplN2< oplN3 );
console.log( "El resultado del Operador Y, es: " + resultadoOperadorLogico );

//Operador || ("OR" o "O")
var resultadoOperadorLO = ( oplN1 < oplN2 ) || ( oplN2 < oplN3);
console.log( "El resultado del operado O, es: " + resultadoOperadorLO );

// Operador negacion !
var resultadoOperadorLN = !resultadoOperadorLO;
console.log( "El resultado del operador de Negacion, es: " + resultadoOperadorLN );

var numero1 = 125;
var numero2 = 50;
var numero3 = 30;

//Condicional IF - Dependiendo de la condicion ejecutara
//las instrucciones dentro de las llaves{}.
if((numero1 < numero2) && ( numero2 < numero3)){
console.log( "Entraste al IF");
}
//Ccondicional ElSE IF - Si n se ejecutaron las instrucciones
//dentro del IF, comprobara una nueva condicion.
else if( numero1 < numero3){
console.log( "Entraste al IF ELSE" )
}
//ELSE - Si no se ha cumplido ninguna condicion, se 
//ejecutaran estas instrucciones por defecto
else{
    console.log( "entraste al ELSE" );
}