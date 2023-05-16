function muestraOpcion(){
    let opciones = document.getElementsByName("eleccion");
    for(let i = 0; i < opciones.length;  i++){
        console.log(opciones);
        if (opciones[1].checked){
            alert(opciones[i].value);
        }
    }
}