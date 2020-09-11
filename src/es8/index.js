// ECMAScript Junio 2017 (ES8)
// ES8 Object.entries. (Convierte un objeto en una matriz.)
const team = {
    frontend: 'Jose',
    backend: 'Alfredo',
    design: 'Angulo',
}

const entries = Object.entries(team);
console.log(entries); // Transforma el objeto como una matriz
console.log(entries.length); // Cantidad de elementos del arreglo
//----------FIN---------------------------------------------------

// ES8 Object.values. (Devolver los valores de un objeto como un arreglo)
const team2 = {
    frontend: 'Angulo',
    backend: 'Jose',
    design: 'Alfredo',
}

const values = Object.values(team2);
console.log(values);
console.log(values.length);
//----------FIN---------------------------------------------------------

// Padding. ES8 cadena.padStart (Añadir caracteres al principio de un String).
const cadena = 'world';
console.log(cadena.padStart(8,'hi '));
// ES8 cadena.padEnd (Añadir caracteres al final de un String)
console.log(cadena.padEnd(11,' Hello'));
//-----------FIN----------------------------------------------------------------

// ES8 Trailling-Comas. (Ahora se puede colocar una coma al final de un objeto, SIN QUE CAUSE ERROR)
const obj = {
    elementouno: 'valoruno',
}
//-----------FIN-------------------------------------------------------------------------------------

// ES8 Promise, async await
const promiseSaludar = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    });
};

const asyncSaludar = async () => {
    const saludar = await promiseSaludar();
    console.log(saludar);
}

asyncSaludar();

const anotherFunction = async () => {
    try {
        const saluda = await promiseSaludar();
        console.log(saluda);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();
//---------------FIN------------------------------------------

