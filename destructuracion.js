let persona = {
    nombre:  'Empezando',
    apellido: 'Un',
    cosa: 'test',
    getPersona: function() {
        return `${ this.nombre } - es: ${ this.apellido }  ${ this.cosa }`
    }
};
console.log(persona.getPersona());

let {nombre: primerNombre, apellido, cosa } = persona;

console.log(primerNombre, apellido, cosa);