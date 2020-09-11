// Junio 2018. ECMAScript 2018. ES9
// Spread Operator
const obj = {
    name: 'Alfredo',
    age: '29',
    country: 'Venezuela'
};

let { country, ...all} = obj;
console.log(all);
console.log(country);
//-------------FIN--------------------

// Porpagation Properties ES9
const person2 = {
    name: 'Luis',
    age: '26',
    country: 'Peru'
}

const conocimientos = {
    ... person2,
    lenguaje: 'javascript',
}

console.log(conocimientos);
//-------------FIN-------------

// Promise Finally ES9
const promiseSaludar = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    });
};

promiseSaludar()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'));
//------------FIN-----------------------------------------------

 const regexDatos = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
 const fecha = regexDatos.exec('2018-04-20');

 const year = fecha[1];
 const month = fecha[2];
 const day = fecha[3];

 console.log(year);
 console.log(month);
 console.log(day);
 console.log(year, month, day);

