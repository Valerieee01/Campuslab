
//ejercicio 1: EScriba una funcion que eleve al cuadrado todos los numeros impares de un vector

function elevarImparesAlCuadrado(vector){
    let [,...vector2] = vector;
    for (let i = 0; i < vector2.length; i++) {
     // Preguntar si es impar
      if (vector2[i] % 2 !== 0) {
      //si es impar, entonces elevarlo al cuadrado
       vector2 [i] = vector2[i] ** 2;
      }
    }
    return vector2;
}

let v = [2, 5, 6, 7, -1];
console.log(v);
let v2 = elevarImparesAlCuadrado(v);
console.log (v2);
console.log (v);

let [f,s,...t]=v
console.log (f,t)

