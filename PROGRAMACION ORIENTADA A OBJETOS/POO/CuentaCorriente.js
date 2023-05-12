//PARADIGMAS O PILARES DE LA PROGRAMACION ORIENTADA A OBJETOS

//Herencia
// Polimorfismo
// Encapsulamiento

// Abstraccion: Solamente toma lo importante 


// const cuentaCorrienteA={
//     numero: 1234,
//     nombre: "Juan",
//     saldo: 350_000,
//     depositar(monto){
//         this.saldo += monto;
//     },
//     girar(monto){
//         if(this.saldo>= monto)
//         this.saldo -=monto
//     else
//         return false

//     return true
//     },
//     consultarSaldo(){
//         return this.saldo;
//     }

// }

// console.log(cuentaCorrienteA.consultarSaldo())
// cuentaCorrienteA.depositar(350_000);
// cuentaCorrienteA.girar(200_000);
// console.log(cuentaCorrienteA.consultarSaldo())


// const cuentaCorrienteB={
//     numero: 7892,
//     nombre: "Maria",
//     saldo: 950_000,
//     depositar(monto){
//         this.saldo += monto;
//     },
//     girar(monto){
//         if(this.saldo>= monto)
//         this.saldo -=monto
//     else
//         return false

//     return true
//     },
//     consultarSaldo(){
//         return this.saldo;
//     }

// }

// console.log(cuentaCorrienteB.consultarSaldo())
// cuentaCorrienteB.depositar(3_050_000);
// cuentaCorrienteB.girar(0);
// console.log(cuentaCorrienteB.consultarSaldo())


// CON CLASE



class cuentaCorriente{

    static cantidad = 0;

    constructor(numero, nombre, saldo){
        this._numero= numero;
        this._nombre= nombre;
        this._saldo=saldo;

        ++cuentaCorriente.cantidad

    }
    set numero(nuevoNumero){
        this._numero = nuevoNumero;
    }
    get numero(){
        return this.numero;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    get nombre (){
        return this.nombre
    }
    set saldo(nuevoSaldo){
        this._saldo = nuevoSaldo;
    }
    get saldo(){
        console.log("Get Saldo")
        return this.saldo;
    }
    depositar(monto){
    this.saldo += monto;
    }
    girar(monto){
        if(this.saldo>= monto)
        this.saldo -=monto
        else return false
        
        return true
    }
    consultarSaldo(){
            return this.saldo;
    }   
   
        
}


const ctaCorrA= new cuentaCorriente(1234, "Juan", 350_000);
const ctaCorrB= new cuentaCorriente(9876, "Maria", 950_000);
console.log(cuentaCorriente.cantidad);

// console.log(ctaCorrA.consultarSaldo())
// ctaCorrA.depositar(350_000);
// ctaCorrA.girar(200_000);
// console.log(ctaCorrA.consultarSaldo())

// console.log("-".repeat(20))

// console.log(ctaCorrB.consultarSaldo())
// ctaCorrB.depositar(3_050_000);
// ctaCorrB.girar(0);
// console.log(ctaCorrB.consultarSaldo())

