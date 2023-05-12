const buildFila = (mes, valor, valortotal, capital, interes, total) => {
    return `<tr>
        <td>${mes}</td>
        <td>${valor}</td>
        <td>${valortotal}</td>
        <td>${capital}</td>
        <td>${interes}</td>
        <td>${total}</td>
        </tr>`;
}




function calculaMontodeCredito (){
    let moncredito = Number (document.MiFormulario.montocredito.value);
    let tasaInteresAnu = Number(document.MiFormulario.tasainteres.value);
    let pagosmen = Number(document.MiFormulario.numeropagos.value);
    let capital = moncredito / pagosmen
    let valortasaInteresmen = capital * tasaInteresAnu / 100
    let valortasainteresAnu = valortasaInteresmen * pagosmen
    let valorTotal = moncredito * (tasaInteresAnu/100) + moncredito
    let valorPagosMen = valorTotal / pagosmen
    tabla = "";
    tablatotales = "";
    const valormontocredito = moncredito
    const valorTotalInteres = valortasainteresAnu
    const valorTotalPagosme = valorTotal
    document.getElementById("vt").innerHTML = `<strong>Valor total es:</strong> ${valorTotal}`;
    document.getElementById("vm").innerHTML = `<strong>Valor total pagos mensuales:</strong> ${valorPagosMen}`
    for (let i = 1; i<=pagosmen; i++){          
        
     tabla += buildFila (i, moncredito, valorTotal,capital, valortasaInteresmen, valorPagosMen);

     moncredito -= capital
     valorTotal -= valorPagosMen 
        }
   
    document.getElementById("tablita").innerHTML = tabla ;
   
}


montodecredito()