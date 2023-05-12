let salario;
let bonificaciones;
let auxilioT;
let eps;
let pen;
let salarioN;
let categorian;
let canEm = 10;
let menorsalario = [];
let proS;
let vTn = [];
function GestionNominaBasica(categoria) {
    if (categoria === "1") {
        salario = 1000000;
        bonificaciones = 100000;
        auxilioT = 400000;
        categorian = "Auxiliar A"
    } else if (categoria === "2") {
        salario = 1200000;
        bonificaciones = 100000;
        auxilioT = 400000;
        categorian = "Auxiliar B"
    } else if (categoria === "3") {
        salario = 1500000
        bonificaciones = 150000
        auxilioT = 0;
        categorian = "Tecnico A"
    } else if (categoria === "4") {
        salario = 2000000;
        bonificaciones = 150000;
        auxilioT = 0
        categorian = "Tecnico B"
    } else if (categoria === "5") {
        salario = 2500000;
        bonificaciones = 200000
        auxilioT = 0;
        categorian = "Profesional A";
    } else if (categoria === "6") {
        salario = 3000000;
        bonificaciones = 250000;
        auxilioT = 0;
        categorian = "Profesional B";
    } else if (categoria === "7") {
        salario = 4000000;
        bonificaciones = 500000;
        auxilioT = 0;
        categorian = "Director A";
    } else if (categoria === "8") {
        salario = 4500000;
        bonificaciones = 1000000;
        auxilioT = 0;
        categorian = "Director B";
    } else if (categoria === "9") {
        salario = 6000000;
        bonificaciones = 2000000;
        auxilioT = 0;
        categorian = "Gerente Departamento";
    } else if (categoria === "10") {
        salario = 10000000;
        bonificaciones = 5000000;
        auxilioT = 0
        categorian = "Gerente General"
    }
     eps = salario * 0.04;
     pen = salario *0.04; 
     salarioN = salario - eps - pen + bonificaciones + auxilioT;
     menorsalario.push(salarioN)
     menorsalario.sort()
     vTn += salarioN
     
     console.log(proS)
     console.log(menorsalario)
     console.log (menorsalario[0])
     console.log(salarioN)

}




let boton= document.getElementById("boton");

boton.addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
    let cedula = Number(document.getElementById("cedula").value);
    let categoria = document.getElementById("categoria").value;
    tabla = document.getElementById("tabla1")
    tabal2 = document.getElementById("tabla2")

    GestionNominaBasica(categoria)
    let fila = `<tr>
    <td>${nombre}</td>
    <td>${cedula}</td>
    <td>${categorian}</td>
    <td>${salario}</td>
    <td>${auxilioT}</td>
    <td>${bonificaciones}</td>
    <td>${eps}</td>
    <td>${pen}</td>
    <td>${salarioN}</td>
    </tr>`
    tabla.innerHTML += fila
    document.getElementById("nombre").value = ""
    document.getElementById("cedula").value = ""
    document.getElementById("categoria").value = ""

    let fila2 = `<tr>
    <td>${i}</td>
    <td>${menorsalario[0]}</td>
    <td>${menorsalario}</td>
    <td>${menorsalario}</td>
    <td>${auxilioT}</td>
    </tr>`
    tabla2.innerHTML += fila2

    document.getElementById("nombre").value = ""
    document.getElementById("cedula").value = ""
    document.getElementById("categoria").value = ""
})