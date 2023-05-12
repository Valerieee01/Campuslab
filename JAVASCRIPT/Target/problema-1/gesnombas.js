const btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener ("click", agregarEmpleadoNomina);

/*
*/

const vEmpleados = [];
const mapTotalNomina = new Map();
const mapEstadisticas = new Map();
const salMin = 1_160_000;

function agregarEmpleadoNomina(e){
    if(capturarInfo()==false) return;
}
function capturarInfo(){
    const mapEmpleado = new Map();
    const cedula = document.getElementById("cedula").value;
    if (cedula.lenght <= 0 ){
        alert ("valor incorrecto en la cc"),
        cedula.setFocus();//Cuando se recargue la pagina en el error
        return false;
    }
    const nombre = document.getElementById("nombre");
    const ctrolCategoria = document.getElementById("ctrolCategoria");
    const categoria = ctrolCategoria.options[ctrolCategoria.selectedIndex].text;
    const abrCategoria = ctrolCategoria.value;
    const datEmpleado = new Map([
        ["nombre", nombre],
        ["categoria", categoria],
        ["abrcategoria", abrCategoria]
    ]);

    mapEmpleado.set(cedula, datEmpleado);
    vEmpleados.add(mapEmpleado);
    console.log(vEmpleados)
}