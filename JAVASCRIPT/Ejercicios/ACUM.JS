let tarifa;

const calcular= function(estado,estrato){
    if (estado==="1"){
        switch (estrato) {
            case "1": tarifa="10000";break;
            case "2": tarifa="15000";break;
            case "3": tarifa="30000";break;
            case "4": tarifa="50000";break;
            case "5": tarifa="65000";break;
        }
    }
    else {
        tarifa="0"
    }
}

let boton= document.getElementById("boton").value;

boton.addEventListener("click", ()=>{
    let nombre=document.querySelector("#nombre").value,
    estado=document.getElementById("estado").value,
    estrato=document.getElementById("estrato").value,
    tabla=document.querySelector("#cuerpo")

    calcular(estado,estrato)
    let fila= `<tr><td>${nombre}</td><td>${estrato}</td><td>${tarifa}</td></tr>`
    tabla.innerHTML+=fila

    document.querySelector("#nombre").value=""
    document.getElementById("estado").value=""
    document.getElementById("estrato").value=""
})