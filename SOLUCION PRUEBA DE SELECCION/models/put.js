export function put (url, datos){
    //busque si existe el dato en base de datos
    fetch(url)
    .then((response)=> response.json())
    .then((data) =>{
       llenarFormulario(formu, data);
       if ( data != undefined){
        //existe registro modifica base de datos
        fetch(url, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
        })
        .then((response)=> response.json())
        .then((data) =>{
            console.log("")
        })
       } else {
         alert("El resgistro no existe en la base de datos para poderlo modificar")
       }
    })
    .catch((error) => {
        console.error(error)
    });
}

function get(url){}