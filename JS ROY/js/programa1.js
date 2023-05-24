let continente = 10000000000;
let pais = 50000000;
let departamento = 50000;
let ciudad = 15000;
let Barrio = 9000;
let direccion =4;

console.log(continente, pais, departamento, ciudad, Barrio, direccion)
document.write(`Continente: ${continente}<br> Pais: ${pais}<br>Departamento: ${departamento}<br> Ciudad: ${ciudad} <br> Barrio${Barrio}<br> Dirección: ${direccion}<br> `);



//  let esTercerMundista = false

//  if (esTercerMundista === true ){
//     pais = CHILE";
//     continente = "America ";
//     document.write(`País: ${pais} <br> Continente: ${continente} <br> Idioma:${idioma}`);
//  } else if (esTercerMundista ===false) {
//      alert("No es mi pais")
//      document.write(`<h1>Intente nuevamente</h1>`);
//  }

const esTercerMundista = true;
const idioma = "Español Latino";

console.log(esTercerMundista,idioma,pais);
document.write(`La mitad del pais es:` + pais/2 +"<br>");
console.log("Resultado total habitantes: " + (pais+1000000));

let finlandia = 6000000;
if (pais > finlandia){
    document.write("Mi país tiene mas habitantes que Finlandia");
    console.log(true)
} else {
    document.write("Mi país tiene menos habitantes que Finladia");
    console.log(false);
}

let promedio = 33000000;
if (pais > promedio){
    document.write("Mi país tiene mas gente que el promedio");
} else {
    document.write("Mi país tiene menos gente");
}

let descripcion = 'Colombia está en América, y Bucaramanga que está en el departamento de Santander tiene un barrio llamado el prado y sus 3000 personas hablan inglés.'
document.write(`<span>${descripcion}<span/>`);

let palabra1 = "platano";
console.log(palabra1.length);
let palabra2 = "mono";
console.log(palabra2.includes(palabra1));
let palabra3 = "mico";
console.log(palabra3.trimStart());
let palabra4 = "perrito";
console.log(palabra4.trimEnd());
let palabra5 = "gato"
console.log(palabra5.replace("si"))
let palabra6 = "pelota";
console.log(palabra6.slice(1,3))
let palabra7 = "chao";
console.log(palabra7.split(" "))







