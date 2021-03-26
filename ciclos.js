//Ciclos - while
var contadorN1 = 5;
var contadorN2 = 30;
while( ( contadorN1 < 10 ) && ( contadorN2>25 ) ){
    console.log( "ContadorN1: "+ contadorN1+" ContadorN2: "+contadorN2);
    contadorN1++;
    contadorN2--;
};

var contadorN3 = 0;
var condicion = "Hola"
//Ciclos DO-WHILE
do{
    console.log("Entraste al ciclo do while");
    contadorN3++;
    if(contadorN3 == 2){
        condicion="Adios"
    }
    
}while( condicion == "Hola");

var condicionN2 = 5;
do{
console.log("valor: "+condicionN2);
condicionN2 -= 5;
}while( condicionN2 >= 5 );



//Ejercicio do-while
//Crear un programa que lea tantos numeros
//como se quiera hasta que se reciba un cero,
//y se mostrara un resultado, que sera la 
//suma de todos los numeros ingresados
const prompt=require('prompt-sync')();
var suma = 0;
var recibeNumeroN1;
var recibeNumeroN2;
do{
    recibeNumeroN1 = prompt("Dame un numero: ");//Recibimos un texto
    suma = suma + parseInt(recibeNumeroN1);
}while(recibeNumeroN1 != 0 ); 
console.log("La suma total es: "+ suma);

//while
while(recibeNumeroN2 != 0){
    suma = suma + parseInt(recibeNumeroN2);
    recibeNumeroN2 = prompt("Dame un numero: ");
}
console.log("La suma total con while es: "+ suma);



















