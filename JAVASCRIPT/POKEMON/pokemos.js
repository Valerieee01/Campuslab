




function construirTarjeta(personaje){
    personaje.results.forEach(e => {
        console.log(e);
        const articulo = document.createRange().createContextualFragment(
            `
            <article>
            <div class="image-container">
                <img src="${e}" alt="">
            </div>
            <h2>${e.name}</h2>
           
        </article>`
        )
        const main = document.querySelector("main");
        main.append(articulo);
    })
}
function obtenerPersonaje (){
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(result => result.json())
    .then(datos => {
        console.log (datos)
        construirTarjeta(datos)
    })
    .catch((err) => {
        console.log("Error al consmir API\n", err.message)
    })
    .finally(()=>{
        console.log("SE ha consumido todo eL API")
    })
}

obtenerPersonaje();