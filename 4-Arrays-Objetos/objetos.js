console.log("Holaaaaaa");

let cori = {
    nombre: "Cori",
    apellido: "Leon",
    edad: 2023-2001,
    mayoriaDeEdad: true,
    pasatiempos: ["costura", "peliculas", "leer"],
};

console.log(cori);

console.log(cori.edad);

console.log(cori.mayoriaDeEdad);

//añadir una propiedad
cori.ocupacion = "optometrista";

console.log(cori)

//Desestructuración
//variables independientes
let {nombre, apellido, edad}=cori;

console.log(nombre);