//validacion del campo de busqueda
let busqueda = document.querySelector("form")
let campoBusqueda = document.querySelector("input")

busqueda.addEventListener("submit", function (e) {
    e.preventDefault()
    if (campoBusqueda.value.length >= 3) {
        this.submit()
    } else {
        alert("Minimo 3 caracteres")
    }
})
