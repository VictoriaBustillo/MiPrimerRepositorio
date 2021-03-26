//Ejemplo
//Dado un numero, sepererlo en centenas, decenas y unidades,
//Intercambiar la posicion entre las centenas y las unidades
//e impimir el numero final

var numeroCompleto = 738;
if( (numeroCompleto <= 999) && (numeroCompleto > 99) ){
    var centenas = parseInt( numeroCompleto / 100 );
    //console.log( centenas );
    var decenas = parseInt((numeroCompleto % 100) / 10);
    //console.log( decenas );
    var unidades = (numeroCompleto % 10);
    //console.log( unidades );
    console.log( "El valor final es: "+ unidades + decenas + centenas );
}
else{
    console.log( "Ingresa un numero de tres cifras" );
}
1
//Enter0
//34, 200, 100

//decimales
//o.2132, 12.123, etc.

//Condicion Switch
var edad = 18;
var conSwith = "Victoria";

switch( conSwith ){
    case 2:
        console.log("El valor ingresado es 2");
        break;
    case 6:
        console.log("El valor ingresado es: 6");
        break;
    default:
        console.log( "Hola "+ conSwith );
        if(edad > 18){
            console.log("!Felicidades eres mayor de edad!");
        } 
        else if( edad < 18){
            console.log( "No eres mayor de edad" );
        }
        break;
    }
