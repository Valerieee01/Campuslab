
function montodecredito (){
    let moncredito = Number(prompt("Ingrese el monto de crédito: "))
    let tasaInteresAnu = Number(prompt("Ingrese la taza de interes Anual:  "))
    let pagosmen = Number(prompt("Ingrese el numero de pagos (mesuales): "))
    let capital = moncredito / pagosmen
    let valortasaInteresmen = capital * tasaInteresAnu / 100
    let valortasainteresAnu = valortasaInteresmen * pagosmen
    let valorTotal = moncredito * (tasaInteresAnu/100) +moncredito
    let valorPagosMen = valorTotal / pagosmen
    console.log (`El capital es: ${capital}`)
    console.log (`El valor del interes mensual: ${valortasaInteresmen}`)
    console.log (`El valor del interes anual es: ${valortasainteresAnu}`)
    console.log(` Valor total es: ${valorTotal}`)
    const valormontocredito = moncredito
    const valorTotalInteres = valortasainteresAnu
    const valorTotalPagosme = valorTotal
    console.log("Mes\t\tValor\t\tValor total\t\tCapital\tInteres\tTotal")
    console.log("-".repeat(40))
    
    for (let i = 1; i<=pagosmen; i++){

    console.log(`${i}\t\t${moncredito}\t\t${valorTotal}\t\t${capital}\t\t${valortasaInteresmen}\t\t${valorPagosMen}`)       
    moncredito -= capital
    valorTotal -= valorPagosMen   

    }

 console.log (`\t\t\t\t\t\t\t\t${valormontocredito}\t\t ${valorTotalInteres}\t\t ${valorTotalPagosme}`)

}

montodecredito()



