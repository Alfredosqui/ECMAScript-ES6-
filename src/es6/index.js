// ## 2015 #### 2015 #### 2015 #### 2015 #### 2015 #### 2015 #### 2015 #### 2015 #### 2015 #### 2015 #### 2015 #### 2015 ## 
// ECMAScript 2015 ES6 (Junio)
// Así se establecia valores por defecto, anteriormente
function newFunction(name, age, country){
    var name = name || 'Alfredo';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// Ahora, en ECMAScript6 se establece asi:
function newFunction2(name = 'Alfredo', age = 32, country = "MX"){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', '23', 'CO');
//----------------------------------------------------------------

// Template Literal con las comillas francesas => ``
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`; //ECMAScript 6
console.log(epicPhrase2);
//-------Fin-----------------------------------------

// Multilinea Anteriormente
let lorem = "Esto es una linea \n" 
+ " esto es otra linea \n" 
+ "y asi se hacia anteriormente las multilineas.";
// Multilinea en ECMAScript 6
let lorem2 = `Ahora todo cambio en ECMAScript 6 
ahora podemos hacer multilineas
sin la necesidad de la barra invertida y la n 
que se utilizaba anteriormente.
Ahora solo necesitamos encerrar todo dentro
de las comillas francesas.
`;

console.log(lorem);
console.log(lorem2);
//---------FIN------------------------------------

let person = {
    'name' : 'Alfredo',
    'age' : '32',
    'country': 'MX'
}

// Antes de ES6
console.log(person.name, person.age, person.country);

// Ahora en ECMASCript 6 Destructuración de elementos
let { name, age, country } = person;
console.log(name);
//--------FIN------------------------------------------

// ECMAScript 6 Spread Operator (Operador de propagación)
let pareja1 = ['UNO', 'DOS'];
let pareja2 = ['TRES', 'CUATRO'];
let pareja3 = ['CINCO', 'SEIS'];

let todos = ['CERO', ...pareja1, ...pareja2, ...pareja3];

console.log(todos);
//----------FIN--------------------------------------------

// ECMAScript 6 Variables Tipos var let const
{
    var alcanceVar = "Variable Global";
}

{
    let alcanceLet = "Variable de Bloque";
    console.log(alcanceLet);

    const pi = "Este valor jamas podra cambiar y tiene alcalce de bloque";
    console.log(pi);
}

console.log(alcanceVar);
//------------FIN----------------------------------------------------------

let name = 'Alfredo';
let age = 29

// Objeto anteriormente
obj = { name: name, age: age };

// Objeto ahora con ECMAScript 6
obj2 = {name, age};

console.log(obj2);
//---------FIN-------------------

// Arrow Functions (Funciones de tipo flecha)
const names = [
    { name: 'Alfredo', age: 29 },
    { name: 'Michell', age: 22 }
]

//ES5
let listOfNames = names.map(function (item) {
    console.log(item.name);
});

//ES6 Arrow Functions (Funcion Flecha)
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    // Esta es otra forma de función Flecha.
}

const listOfName4 = name => {
    // Esta es otra forma de función Flecha
}

// Funcion que recibe un numero (num) y lo multiplica por si mismo y retorna el resultado
const square = num => num * num;

//--------------FIN-------------------------------------------------------------------------

// Promesas ES6
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('se puede anidar varios then'))
    .catch(error => console.log(error));

//----------------------------------------------------------

// Clases ES6
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(entradaA, entradaB) {
        this.valueA = entradaA;
        this.valueB = entradaB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));
//------------FIN-------------------------

// Trabajando con módulos ES6
import {saludo} from './module';

saludo();

//---------FIN-------------------

// Generadores ES6
function* saludarMundo() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'world';
    }
}

const generadorSaludo = saludarMundo();
console.log(generadorSaludo.next().value);
console.log(generadorSaludo.next().value);
//----------FIN------------------------------
//## 2015 #### 2015 #### 2015 #### 2015 #### 2015 #### 2015 #### 2015 #### 2015 #### 2015 #### 2015 #### 2015 #### 2015 #### 2015 ##