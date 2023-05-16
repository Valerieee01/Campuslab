function mostrarMayor(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    
if(num1 && num2){
     if (num1 >= num2){
        if (num1 == num2){
            alert("los numeros son iguales");
        } else {
            alert(`el numer ${num1} es mayor`);
        }
    }else{
        alert(`el numero ${num2} es mayor`)
    }
} else {
    alert ("uno de los numeros no se relleno")
}

}

//creara dos inputs de numeros y un botob, al puslar el boton mostar en un alert quien es el mayor de los dos