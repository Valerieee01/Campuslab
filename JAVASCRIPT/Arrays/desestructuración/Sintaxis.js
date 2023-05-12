const vector = [1, 2, 3];
const [n, ...h] = vector;
console.log (n);
console.log (h);


const vector2 = [1, [2, 3], 4];
const [...f] = vector2;
console.log(f);


const vector1 = [1, [2, 3], 4];
const [a,b,c] = vector1; 
console.log (b);
console.log (c);


const perfil = ["olwatobi", "sofela"];

function obtenerInfoUsuario ([Nombre, apellido]){
    return `Mi nombre es  ${Nombre} ${apellido}`;
}

let [saludo,,,Nombre] = ["Hola", "yo", "Soy", "Sarah"];
console.log(saludo);
console.log(Nombre);