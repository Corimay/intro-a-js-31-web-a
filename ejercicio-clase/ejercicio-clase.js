let numero = prompt ('Ingrese un número');

if (numero) {
    if (numero % 2 === 0) {
        console.log(numero + " es par");
    } else {
        console.log(numero + " es impar");
    }
} else {
    console.log('Número inválido.');
}
