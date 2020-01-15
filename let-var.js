/*
Declaración de var escucha la ultima var declarada
*/

var nombre = 'test fuera';

if ( true ) {
    var nombre = 'test dentro';
} 
console.log(nombre);

/*
Declaración de let  escucha las misma variable pero almacenada con des sentencias distintas
*/

let nombre1 = 'test fuera del if';

if (true) {
    let = nombre1 = 'test dento del if';
}

console.log(nombre1);
/*
Otro ejemplo var recuerda que guarda el valor de i asi que cuando imprima saldra i=6
*/

// for (var i=0; i<=5; i++) {
//     console.log(`i: ${i}`);
// }
// console.log(i);
/*
Otro ejemplo con let 
*/
let i = 'Hola mundo';
for(let i=0; i<=5; i++) {
    console.log(`i: ${i}`);
}
console.log(i);



