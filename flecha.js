

// este objeto cuando se es llamado puede retornar los metodos o atributos internos
let persona = {
    nombre:  'Empezando',
    apellido: 'Un',
    cosa: 'test',
    getNombre() {
        return `${ this.nombre } - es: ${ this.apellido }  ${ this.cosa }`
    }
};
console.log(persona.getNombre());