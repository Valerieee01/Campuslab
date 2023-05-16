fechas = [];
function añadirFecha(){
    const form = document.forms["formFechas"];
    const fecha = form.fecha.value;
    if(fecha !== ""){
        fechas.push(new Date(fecha));
        fechas.sort(function(a,b){
            return a - b
        })
        alert ("Fecha se ha añadido correctamente")
    }else {
        alert("Fecha no se ha añadido correctamente")
    }
}

function mostrarResultados(){

    const fechaMenor = fechas[0];
    const fechaMayor = fechas[fechas.length - 1];
    const numFecha = fechas.length;
    
    const etiqFechaMenor = document.getElementById("fechaMenor");
    const etiqFechaMayor = document.getElementById("fechaMayor");
    const etiqNumFechas = document.getElementById("numFechas");

    etiqFechaMayor.innerHTML = fechaMayor;
    etiqFechaMenor.innerHTML = fechaMenor;
    etiqNumFechas.innerHTML = numFecha;

}

//11. Dado el formulario HTML. 
//Al pulsar el boton de añadir fecha debe de añadir una fecha correcta a un array. Debes poner un alert indicandolo.
//Al pulsar el boton de mostrar fechas, debera mostrar la fecha mayor, la menor y el numero de fechas introducidas