let vnombres = new Array(); //[]
function ordenar(){

    let nombre = document.MiFormulario.nombre.value;
    vnombres.push(nombre);
    vnombres.sort();
    document.MiFormulario.ordenados.value = vnombres.join("\n");
    document.MiFormulario.nombre.value = "";
}
function ordenar2 (){
    let nombre = document.MiFormulario.nombre.value;
    let vnombres2 = document.MiFormulario.ordenados.value.split("\n");

    vnombres2.push(nombre);
    vnombres.sort();

    document.MiFormulario.ordenados.value = vnombres2.join("\n");
    document.MiFormulario.nombre.value= "";
}

function limpiarTxtArea (){
    document.MiFormulario.ordenados.value = "";
}