function recogerDatos() {

    let form = document.forms["myForm"]

    let nombreCliente = form.nombre.value;
    let telefonoCliente = form.telefono.value;
    let emailCliente = form.email.value;

    let sabor = form.sabor.value;

    let recipiente = form.recipiente.value;
   

    let extras = document.getElementsByName("extras[]")
    let mensajeFinal = "El cliente con nombre: "+ nombreCliente+
                        ", telefono: "+ telefonoCliente+
                        ", email: "+emailCliente+
                        " ha elegido un helado con el sabor: "+sabor+
                        " en un recipiente de " + recipiente+
                        " con los siguientes extras: ";

    for (let i = 0; i < extras.length; i++) {
        const element = extras[i];
        if (element.checked){
            mensajeFinal += element.value + "";
        }

    }

    console.log(mensajeFinal);
    

}

