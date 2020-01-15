let employee = [{
    id: 1,
    name: 'Erick'
},
{
    id:2,
    name: 'Melissa'
},
{
    id: 3,
    name: 'Pedro'
}];

let wages = [{
    id:1,
    wage: 1000
},
{
    id:2,
    wage: 2000
}];

let getEmployee = async (id) => {

        let employeeDB = employee.find(employee => employee.id === id)

        if(!employeeDB){
            throw new Error(`Does not exist employee with the id: ${id}`)
        } else {
            return employeeDB;
        }
}


let getWage = async (employee) => {

        let wageDB = wages.find(wage => wage.id === employee.id);

        if(!wageDB){
            throw new Error(`It was not found wage for the employee: ${ employee.name }`);
        } else {
            return {
                id: employee.id,
                name: employee.name,
                wage: wageDB.wage
            };
        } 
}

let getInfo = async (id) => {

        let employee = await getEmployee(id);
        let resp = await getWage(employee);

        return `The wage of ${ resp.name } is $ ${ resp.wage }`;
}

getInfo(2)
        .then(message => console.log(message))
        .catch(error => console.log(error));