/* Concatenando */
let test = 'prueba de string';
let test1 = 'prueba de texto';


console.log(test + ' ' + test1 );
console.log(`${ test } ${ test1 }`);


// funcion para devolver una concatenacion de dos string
function getTest() {
    return `${ test } ${ test1 }`;
}

console.log(`resultado: ${ getTest() }`);