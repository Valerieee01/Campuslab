const Formula = (t1, t2,) => t1 + (t2 ** 2) ;

let t1 = 0; let t2 = 1; let n = 5;

function  fibonacciModificado (t1, t2, n){
  let p1 = t1; let p2 = t2; let nth;
  for (let i = 3; i <= n; i++){
    nth = Formula (p1, p2); p1 = p2; p2 =nth;
  }
  return nth;
}

console.log(fibonacciModificado (t1, t2, n));