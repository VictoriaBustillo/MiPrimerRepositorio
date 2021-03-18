//proyecto personal
const prompt = require("prompt-sync")();
var nombre = prompt("Ingresa tu Nombre: ");
var listaDeNombres =["Lucia", "Manuel", "Carlos", "Grecia", "Ramon",];
if((nombre == listaDeNombres[1])||(nombre==listaDeNombres[2])||(nombre==listaDeNombres[4]) ){
    console.log( "Bienvenido "+ nombre);
}
else if((nombre== listaDeNombres[0])||(nombre==listaDeNombres[3])){
    console.log("bienvenida "+ nombre);
}
else{
    console.log("Lo siento, no perteneces a esta clase");
};
