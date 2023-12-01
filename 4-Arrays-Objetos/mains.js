let frutas = [];

let verduras = ["jitomate", "cebolla", "zanahoria", "calabaza", "jitomate"];

console.log(verduras)

console.log(verduras[3].toUpperCase());

//Escribir las variables iguales en todas las condiciones
let indexOfjitomate = verduras.indexOf("CEBOLLA".toLowerCase()); 

//Revisar la posición de un elemento en el arreglo
console.log(indexOfjitomate); 

//Retorna true o false en caso de incluir el elemento en cuestión
let contains = verduras.includes("cebolla"); 

console.log(contains)

console.log(verduras);

let numerosAletaorios = [2,2,3,4,5,6,7,4,2,2,4,5,3,2,2,4,5,5,4,4,4,4,4,44]

//La cantidad de elementos en el arreglo
console.log(numerosAletaorios.length) 

console.log(frutas);

//push(agregar un elemento al final) y unshift (agregar un elemento al inicio)
frutas.push("fresa");

console.log(frutas);

frutas.unshift("naranja");

console.log(frutas);

//pop (se elimina el último elemento) y shift (se elimina el primer elemento)
verduras.pop();

console.log(verduras);

//split divide el string en cuestión según el caracter que le pasemos
let vehiculos = "coche, helicoptero, avión, moto";

let arregloVehiculos = vehiculos.split(",");

console.log(arregloVehiculos);

//Indicamos donde empieza y donde termina con slice()
let newArray = arregloVehiculos.slice(0,3);

console.log(newArray);

console.log(arregloVehiculos);

let cadena = "Holaaaaaaa";

console.log(cadena.slice(3,6));

//splice modifica el arreglo original incluyendo los elementos segun el indice y borra otros segun el segundo parametro
arregloVehiculos.splice(1,0,"bicicleta");

console.log(arregloVehiculos);

//reverse() acomoda los elementos al revés
arregloVehiculos.reverse();

console.log(arregloVehiculos);

//concat() unir dos o más variables, el orden si importa
let verdurasVehiculos = verduras.concat(arregloVehiculos);

console.log(verdurasVehiculos)