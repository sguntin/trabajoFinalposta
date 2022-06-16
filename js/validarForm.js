//validacion del campo de busqueda
let busqueda = document.querySelector("form") //el parametro es un string x eso entre ""
let campoBusqueda = document.querySelector("input")

busqueda.addEventListener("submit", function (e) {
    e.preventDefault()
    if (campoBusqueda.value.length >= 3) {
        this.submit()
    } else {
        alert("Minimo 3 caracteres")
    }
})