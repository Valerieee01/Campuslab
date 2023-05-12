const buildFila = (nom, lun, mar, mier, jue, vie, sab, total) => {
   return `<tr>
   <th ${nom}</th>
   <td>${lun}</td>
   <td>${mar}</td>
   <td>${mier}/td>
   <td>${jue}</td>
   <td>${vie}</td>
   <td>${sab}/td>
   <td>${total}/td>
 </tr>`
}


 
function calcularKilometros(){
    n = Number(document.MiFormulario.n.value);
    nombre = document.MiFormulario.nombre.value;
    lunes = Number(document.MiFormulario.lunes.value);
    martes = Number(document.MiFormulario.martes.value);
    miercoles = Number(document.MiFormulario.Miercoles.value);
    jueves = Number(document.MiFormulario.Jueves.value);
    viernes = Number(document.MiFormulario.Viernes.value);
    sabado = Number(document.MiFormulario.Sabado.value);
    total = lunes + martes + miercoles + jueves + viernes + sabado;
    tabla = "";
     for (let i = 1; i <= n; i++){
        tabla += buildFila(nombre, lunes, martes, miercoles,jueves, viernes,sabado, total)
     }
     document.getElementById("tablita").innerHTML = tabla;
}
calcularKilometros()
