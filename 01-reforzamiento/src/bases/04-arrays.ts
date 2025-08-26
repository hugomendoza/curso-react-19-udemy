// const myArray: (number | string)[] = [1, 2, 3, 4, 5, 6];
const myArray: number[] = [1, 2, 3, 4, 5, 6];

// myArray.push(10);
// myArray.push(11);

// console.log(myArray);

// for (const myNumber of myArray) {
//   console.log(myNumber + 10);
// }

//! El array pasa por referencia y sus valores pueden mutar
// * const myArray2 = myArray;

//! El operador spread me ayuda a crear un copia del arreglo original
const myArray2 = [...myArray];

myArray2.push(7);

console.log({ myArray, myArray2 });
