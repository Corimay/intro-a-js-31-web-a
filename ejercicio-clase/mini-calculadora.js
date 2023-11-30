let num1 = prompt ('Escoge el primer número')
let numero1 = parseInt(num1)
if (numero1 || numero1 === 0) {
} else {
    console.log('Número inválido.');
}

let operador = prompt ('Escoge un operador + o -')

let num2 = prompt ('Escoge el segundo número')
let numero2 = parseInt(num2)
if (numero2 || numero2 === 0) {
} else {
    console.log('Número inválido.');
}

switch (operador) {
    case '+':
        console.log(numero1+numero2);
        break;
    case '-':
        console.log(numero1-numero2);
        break;
    default:
        console.log('Ese no es un operador de + o -')
}

console.log('Fin del código')

