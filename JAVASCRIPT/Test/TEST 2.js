
const buildFila = (nomProveedor, nomProducto, precio2022, precio2023) => {
    return `<tr>
        <td>${nomProveedor}</td>
        <td>${nomProducto}</td>
        <td>${precio2022}</td>
        <td>${precio2023}</td>
        </tr>`;
}


const buildFila2 = (nomProveedor, nomProducto, precio2022, precio2023, incrementot) => {
    return `<tr>
        <td>${nomProveedor}</td>
        <td>${nomProducto}</td>
        <td>${precio2022}</td>
        <td>${precio2023}</td>
        <td>${incrementot}</td>
        </tr>`;
}


const incremento = (x , y) => ((y - x) / y) + 1;

b=0
function proveedores() {

    strHTML= ""; 
    strHTML2="";

    let n = Number(prompt("Ingrese el numero de proveedores:  "));
    for (let i = 1; i<= n; i++){
      let nomProveedor = prompt("Ingrese el Nombre del proveerdor: ");
      let nomProducto = prompt ("Ingrese el Nombre del producto: ");
      let precio2022 = Number(prompt("Ingrese el Precio del  año 2022: "));
      let precio2023 = Number(prompt("Ingrese el precio del año 2023: "));
      let incremento1 = incremento(precio2022, precio2023);
      let u = precio2022-precio2023
    if (b<u){
        strHTML2 = buildFila2 (nomProveedor, nomProducto, precio2022, precio2023, incrementot);
      }

    strHTML += buildFila (nomProveedor, nomProducto, precio2022, precio2023);

    }
    document.getElementById("datos").innerHTML = strHTML;
    document.getElementById("datos2").innerHTML = strHTML2;
  }
proveedores()
  