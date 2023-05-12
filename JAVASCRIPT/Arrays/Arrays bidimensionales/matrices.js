l//et matriz = [["salmon", "halibut" ], ["coral", "reef"]];
//console.log(matriz);
//console.log(matriz([1][0]));

// Crear matrices

function crearMatriz (matriz, filas, columnas){
    for (let i = 0; i < filas ; i++) {
        matriz[i]= new Array(columnas)
    return matriz;
    }
}
//let matrix = [];
//let filas = 2 ;
//let colums = 2;
//crearMatriz(matrix, filas, colums)

// Llanasr matriz
const llenarMatriz = function (m) {
    for (let f = 0; f < m.length; f++){
        for(let c = 0;  c < m[f].length; c++) {
            m[f][0]= prompt(`ID del empelado ${f+1}`);
            m[f][1]= prompt(`NOmbre del empleado ${f+1}`);
            m[f][2]= prompt(`Salario ${f+1}`)

        }
    }
}
//let m = llenarMatriz ()


// Funcion para recorrer una matriz
function imprimirMatriz (matriz){
    for(let f = 0; f < matriz.length; f++){
        let fila = "";
        for (let c = 0; c < matriz[f].length; c++){
            fila += matriz[f][c] + "\t\t";
        }
        console.log(fila)
    }
}
//let matrizzzz = [["papa", "Yuca"], ["maiz", "pera"]];
//imprimirMatriz(matrizzzz)

//
 /*let fil = Number(prompt("Ingrese el numero de filas; "));
 let col = Number(prompt("Ingrese el numero de columnas: "));
 let matx = crearMatriz (matx,fil, col);
 llenarMatriz(matx);
 imprimirMatriz(matx);*/

let mt = [ [4,5,6], 
            [7,8,9],
            [10,11,12],
            [13,14,15]]
 
function sumaFilas (m) {
    let vsum = [];
    for ( let f=0; f < m.length; f++){
        /*vsum[f]= 0;
        for (let c = 0; c < m[f].length; c++){
            vsum[f] += m [f][c]
        }*/
        vsum[f] = m[f].reduce((acumulador, elemento) => {
            return acumulador + elemento;
        });
    }
    return vsum;
}
/*console.log(sumaFilas(mt));*/





let mtx = [ [4,5,6], 
            [7,8,9],
            [10,11,12],
            [13,14,15]]

function sumaCol (m){
    let vcol = m[0].map(()=>0);
   for (let f = 0; f < m.length; f++ ){
        for (let c = 0; c < m[f].length; c++ ){
            vcol [c] += m[f][c];
        }
   }
   return vcol;
}
//console.log(sumaCol(mt))

let matrz = [];
let filas = NUmber(prompt("Ingrese la cantidad de empleados:"));
matrz = crearMatriz (matrz, filas, 3 );
llenarMatriz(matrz);
let maySalario = 22







