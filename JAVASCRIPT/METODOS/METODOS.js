let arr = [1, 2, 3];
arr.push(4);
console.log(arr)

let arr1 = [1, 2, 3];
let lastElement = arr1.pop();
console.log(lastElement);
console.log(arr)

let arr2 = [1, 2, 3];
let firstElement = arr2.shift();
console.log(firstElement);
console.log(arr2);

let arr3 = [1, 2, 3];
let sElement = arr3.unshift(1);
console.log(arr3);

let arr4 = [1,2,3,4,5];
let removedelements = arr4.splice(1,2);
console.log(removedelements)
console.log(arr4)

let arr5 = [1,2,3];
let arr6 = [5,6,7];
let newArr = arr5.concat(arr6);
console.log(newArr);

let arr7 = ["apple", "banana", "piña"];
let str = arr7.join(', ');
console.log(str)

let arr8 = ["apple", "banana", "piña"];
let index = arr8.indexOf('banana');
console.log(index);
