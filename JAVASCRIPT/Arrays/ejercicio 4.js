// hacre una funcion  que devuelva true o false si un elemento no esxixte en el vector 
function existevector(vector, elem){
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] === elem)
        return true;
        
    }
    return false;
}

let v = ["daniela", "Mariana", "Sofia","Kevin"]
console.log(v);
let v2 = existevector(v, "Mariana");
console.log(v2);