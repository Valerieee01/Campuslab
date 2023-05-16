function añadirTexto(){
    let texto = document.getElementById("texto");
    let mostrar = document.getElementById("mostrar_texto");
    mostrar.innerHTML += texto.value;
}