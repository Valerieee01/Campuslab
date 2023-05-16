function getRamdomInt (min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function generarNumeros(){
    let elementos = document.getElementById("elementos");
    let opcionesGeneradas = "";
    for(let i = 0; i < 10; i++){
        opcionesGeneradas += "<option>" + getRamdomInt(1,100) + "</option>"
    }

    elementos.innerHTML = opcionesGeneradas
}

//Crear un boton que al pulsarlo genere una lista de 10 numeros aleatorios en un selec vacio.
//Al pulsar de nuevo , se resetara la lista