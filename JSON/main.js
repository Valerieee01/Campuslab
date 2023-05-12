import cargartext from "./cargarTxt.js"

const cargarTxt = document.getElementById("cargartxt");
const btnCargarTxt = document.getElementById("btntexto");

btnCargarTxt.addEventListener("click", (e) => {
    cargartext(cargarTxt);

    e.stopPropagation();
});

const btncargarJSON = document.getElementById("btnJSON");
const tablaDatos = document.getElementById("dattable");

btncargarJSON.addEventListener("click", (e) => {
    cargarJSON(tablaDatos);
    e.stopPropagation();

});
function cargarJSON (elemHTML) {
    fetch("datos.json")
    .then(response => response.json())
    .then(datos =>{
        console.table(datos);
        buildTable(elemHTML, datos);
    })
}

function buildTable (elemHTML, datos){
    let fila ="";
    for (let valor of datos){
        fila += `
        <tr>
            <td>${valor.NOMBRE}</td>
            <td>${valor.EQUIPO}</td>
            <td>${valor.EDAD}</td>
            <td>
                <img src = ${valor.SEXO === "M" ? "man.png" : "woman.png" } alt="Camper">
            </td>
        <tr>`
    }
    elemHTML.innerHTML = fila;
}