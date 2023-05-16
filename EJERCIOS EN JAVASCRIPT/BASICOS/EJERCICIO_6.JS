function escribirNombres(e){ 
    e.preventDefault();
    let nombre = document.getElementById("nombres").value;
    if (nombre == ""){
        alert("el espacio esta vacio")
    } else {
        
        let opcion = "<li>" +nombre + "</li>"
        let lista = document.getElementById("lista");
        lista.innerHTML += opcion;
        alert ("Se ha insertado el nombre")
    }
}

