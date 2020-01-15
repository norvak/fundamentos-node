let getName = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve('Erick');
        }, 3000);
    })
}

let greeting = async () => {

    let name = await getName();
    return `Hello ${ name }`;
}

greeting().then(message => {
    console.log(message);
    }).catch(error => {
    console.log(error);
})


