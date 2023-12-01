
/*let i = 0;

while (i<=10) {
    console.log(i);
    i ++;
}*/


//Ciclo While
/*let respuesta = prompt("Ingrese algo, en caso de no querer ingresar nada escriba esc");

let array =[]

while (respuesta !== "esc") {
    array.push(respuesta);
    respuesta = prompt("Escriba algo más o escriba esc para salir");
};

console.log(array)*/


//Ciclo do while
/*let respuesta;

let array =[]

do {
    if (respuesta){
        array.push(respuesta);
   }
    respuesta = prompt("Escriba algo más o escriba esc para salir");
} while (respuesta !== "esc");

console.log(array)*/


//Ciclo for
let pokemons = ["Pikachu", "Charmander", "Perrito"];

for (let i = 0; i < pokemons.length; i++){
    console.log(pokemons[i]);
}
