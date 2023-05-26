// let nota1 = Number(prompt("Ingrese nota #1: "));
// let nota2 = Number(prompt("Ingrese nota #2: "));
// let nota3 = Number(prompt("Ingrese nota #3: "));

// let promedio = (nota1 + nota2 + nota3)/3;

// if (promedio <= 3.9) {
//     alert("No Becado")
// } else{
//     alert("Becado")
// }

// 2
// let num = Number(prompt("Ingrese Numero:"));
// if (num %2 === 0 && num > 10){
//     alert("Numero par y mayor a 10") 
// } else if (num %2 != 0 && num > 10) {
//     alert("Numero es impar y mayor 10")
// }else if (num %2 === 0 && num < 10){
//     alert("Numero es par y menor a 10")
// }else if (num %2 != 0 && num < 10){
//  alert("el numero es impar y menor de 10")
// }

//3
// function CalcularVoltaje (I,C) {
//     return (I * C)
// }
// let resistencia = Number(prompt("Ingrese el valor de la resistencia:"));
// let intensisdadCorriente = Number(prompt("Ingrese valor de la resistencia:"));
// // alert (`Voltaje : ${CalcularVoltaje(resistencia,intensisdadCorriente)}`);

// //
// function MayorEdad (N1,N2,N3, E1,E2, E3){
//     let N1 = prompt("Ingrese nombre:");
//     let N2 = prompt("Ingrese nombre:");
//     let N3 = prompt("Ingrese nombre:");
//     let E1 = prompt("Ingrese Edad:");
//     let E2 = prompt("Ingrese Edad:");
//     let E3 = prompt("Ingrese edad:");

// }

let Num = Number(prompt("Ingrese el numero: "));
let divi = []

  for (divi = 2; divi < Num/2; divi++){
    if(Num % divi === 0){
        console.log(divi,"Lo divide")    
        let sumar = [];
        sumar.push(divi)
        //let total = sumar.reduce((a, b) => a + b, 0);
        console.log(sumar);
    }
  }
  




