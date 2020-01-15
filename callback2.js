let empleados = [{
    id: 1,
    nombre: 'Erick'
},
{
    id:2,
    nombre: 'Melissa'
},
{
    id: 3,
    nombre: 'Pedro'
}];

let salarios = [{
    id:1,
    salario: 1000
},
{
    id:2,
    salario: 2000
}];


let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if(!empleadoDB){
        callback(`No existe un empleado con el id: ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}


let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if(!salarioDB){
        callback(`No se encontró un salario para el empleado: ${ empleado.nombre }`);
    } else {
        callback(null, {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
    }
}

getEmpleado(1, (error, empleado) => {

    if (error) {
       return console.log(error);
    }

    getSalario( empleado, (error, resp) => {

        if(error) {
            console.log(error);
        } else {
            console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }$`);
        };
    })

});

