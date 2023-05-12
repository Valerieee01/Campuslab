function compararTripletes(a, b) {
    let uno = 0;
    let dos = 0;
  
    for (let i = 0; i < 3; i++) {
      if (a[i] > b[i]) {
        uno++;
      } else if (a[i] < b[i]) {
        dos++;
      }
    }
  
    return [uno, dos];
  }

const a = [1, 2, 3];
const b = [3, 2, 1];

const scores = compararTripletes(a, b);
console.log(scores); 