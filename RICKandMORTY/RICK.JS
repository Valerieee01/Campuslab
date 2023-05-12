function construirTarjeta(personaje){
    personaje.results.forEach(e => {
        console.log(e);
        const articulo = document.createRange().createContextualFragment(
            `
            <article>
            <div class="image-container">
                <img src="${e.image}" alt="">
            </div>
            <h2>${e.name}</h2>
            <span>${e.species}</span>
        </article>`
        )
        const main = document.querySelector("main");
        main.append(articulo);
    })
}
function obtenerPersonaje (){
    fetch("https://rickandmortyapi.com/api/character")
    .then(result => result.json())
    .then(datos => {
        console.log (datos)
        construirTarjeta(datos)
    })
    .catch((err) => {
        
    })
}

obtenerPersonaje();