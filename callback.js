// este metodo recive dos paramentros id y callback

let getUsuarioById = (id, callback) =>  {
    let usuario = {
        nombre: 'Erick',
        id
    }
// si el id es 20 ejecuta este metodo
    if (id === 20) {
        callback(`El usuario con id ${id}, no existe en la BD`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(1, (err, usuario) => {
    
    if(err) {
        return console.log(err);
    }
    console.log('datos obtenido', usuario);
});


// funcion callback

setTimeout( () => {
    console.log(`resultado`);
}, 3000);

 