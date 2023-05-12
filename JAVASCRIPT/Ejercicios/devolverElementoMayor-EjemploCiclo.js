let devolverElementoMayor  = (vector) => {
    if (vector.length === 0)
        return null;

    let mayor = vector [0]
    for (let i = 0; i < vector.length; i++) {
         if (vector[i]> mayor )
            mayor = vector[i]
        
    }
    return mayor;
}

let v = ["perrito","bonito", "abril", "zorra"];
console.log(v);
let v2 = devolverElementoMayor(v);
console.log (v2);


