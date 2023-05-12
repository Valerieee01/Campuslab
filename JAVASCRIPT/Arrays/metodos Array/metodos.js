
// resume el for 
let arr = [1, 2, 3];
arr.forEach(function(element){
 console.log(element)
});

// crea un nuevo array con los resultados de llamar una funcion
let arr1 = [1, 2, 3];
let mappedArr =arr1.map(function(element) {
 return element * 2;
});
console.log(mappedArr)

//crea un array con todos los elementos que cumplan una condicion especificada en una funcion

let arr3 = [1, 2, 3];
let filteredArr = arr.filter(function(element) {
  return element%2===0
});
console.log(filteredArr);


// reduce el array sumando los elementos que lo contiene 
let arr4 = [1, 2, 3];
let suma = arr4.reduce (function(accumulator, currentValue){
  return accumulator + currentValue;
});
console.log(suma);

//me muestra el valor max del array 
let arr5 = [1, 2, 3, 8];
let maxNumber = arr5.reduce(function(accumulator, currentValue){
     return Math.max(accumulator, currentValue);
});
console.log(maxNumber)


//saca promedio de manera rapida
let arr6 = [1, 2, 3];
let sum = arr6.reduce (function(accumulator, currentValue){
  return accumulator + currentValue;
});
let average = sum / arr.length;
console.log(average);

// 



