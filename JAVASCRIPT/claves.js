/* ejemplo de como llamar array*/
let h =["hbk", "a,", 5, 10, "tra", [5, 6, 32]] ;
console.log(h)
console.log(h[5][2])

//Ejemplo de como llamar objetos
const valerie = {
    nombre:"valerie" ,
    apellido:"Afanador",
    Edad : 16,
    soltero : false,
    hobbis : ["ver peliculas", "jugar", "bailar"],
    contactos : {
        correo : "valerie.afa@",
        cel : 3172963180,
        instagram : "val_fa"
    },
    saludo: function () {
        console.log (`Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.Edad} años`)
    }
}

console.log(valerie.nombre);
console.log(valerie.soltero);
console.log(valerie.hobbis[2]);
console.log(valerie.contactos.correo);
valerie.saludo()

//Funciones
//flecha un parametro
let saludar = nombre => console.log(`Hola, ${nombre}`);console.log(saludar("Iván"));
//flecha  con parametros
function calcular(operacion, numero1, numero2) {return operacion(numero1, numero2);} 
let c = calcular((numero1, numero2) => numero1 + numero2, 6, 7);console.log(c);
//flecha sin parametros
let mostrarMensaje = () => console.log("Hola mundo");
console.log(mostrarMensaje());

