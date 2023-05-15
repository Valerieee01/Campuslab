export function llenarFormulario (formu, datos){
    if (datos != undefined){
        console.table(datos);
    for (let key in datos){
        const campo = formu.elements[key];
        
    }
    }else {
        alert("No hay registros en la base de datos")
    }
}