export default function cargartext (elemHTML){
    fetch("datos.csv")
    .then(datos => datos.text())
    .then(data => {
        console.log(data);
    elemHTML.innerHTML = data
    })
}
