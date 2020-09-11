//## 2019 ## ## 2019 ## ## 2019 ## ## 2019 ## ## 2019 ## ## 2019 ## ## 2019 ## ## 2019 ## ## 2019 ## ## 2019 ## 
// Junio 2019 ECMAScript 2019
// flat() => Aplanar Arreglos.
let array = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

console.log(array.flat(2));
//----------FIN------------------------------

// tlatMap() => Mapear cada elemento, pasar una función y aplanarlo según el resultado
let array2 = [2,3,4,5,6];
console.log(array2.flatMap(value => [value, value * 2]));
//----------FIN----------------------------------------------------------------------

//trimStart() => Eliminar espacios en blanco al incio de un string
let saludo = '        Hello World';
console.log(saludo); // Sin eliminar espacios del principio
console.log(saludo.trimStart());

//trimEnd() => Eliminar espacios en blanco al final de un string
let saludo2 = 'Hello World         ';
console.log(saludo2); // Sin eliminar espacios del final
console.log(saludo2.trimEnd());
//-------------FIN-------------------------------------------------

// try/catch: ahora se puede utilizar sin necesidad de especificarlo como catch(error), 
// sino que directamente se puede usar en el scope del catch.
try {

} catch {
    //Error;
}
//------------FIN------------------------------------------------------------------------

// Object.fromEntries() => Transformar arreglos a objetos.
let entries = [["nombre", "Alfredo"], ["age", 32]];

console.log(Object.fromEntries(entries));
//------------FIN-----------------------------------------

//Symbol => permite regresar a la descripcion de un objeto de tipo Symbol
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);
//-----------FIN----------------------------------------------------------
//## 2019 ## ## 2019 ## ## 2019 ## ## 2019 ## ## 2019 ## ## 2019 ## ## 2019 ## ## 2019 ## ## 2019 ## ## 2019 ## ## 2019 ## 
