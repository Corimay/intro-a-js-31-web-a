let color = prompt('De que color es el semáforo?');

if(color === 'verde') {
    console.log('Puedes avanzar');
 
}else if(color === 'amarillo') {
    console.log('Baja la velocidad');

}else if(color === 'rojo'){
    console.log('Detente!');
    
}else {
    console.log('ese no es un color válido!');
}
