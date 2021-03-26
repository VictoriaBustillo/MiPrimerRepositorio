//Tema Arreglos Parte2

var concatenaN1 = ["Hola", "Buenas", "Tardes"];
var concatenaN2 = [ "Adios", "Buenas", "Noches"];
console.log( concatenaN2.concat(concatenaN1) );

//metodo sort - sirve para ordenar
var frutas1 = [ "Mandarina", "Pina", "Sandia", "Durazno"];
var frutas2 = [ "Mandarina", "Pina", "Pera", "Durazno"];
var arregloNumeros = [5000, 10, 200, 1000, 400 ];
frutas1.sort();
console.log( frutas1 );
frutas2.sort();
console.log( frutas2 );
//arregloNumeros.sort();
console.log( arregloNumeros );

//Ciclor - FOR
console.log( "Hola - Forma Manual" );
console.log( "Hola - Forma Manual" );
console.log( "Hola - Forma Manual" );

for(var i = 10; i >= 2; i-- ){
    console.log("Hola - Forma automatica"+" i: "+ i);
}
//[ 5000, 10, 200, 1000, 400 ]- Original
//[ 10, 1000, 200, 400, 5000]- Ordenado
console.log( arregloNumeros[4]);

for( var j= 0; j< arregloNumeros.length; j++ ){
    console.log( "Elvalor del arreglo en la"+
    "posicion: "+ j +"es: "+arregloNumeros[j]);
}
















