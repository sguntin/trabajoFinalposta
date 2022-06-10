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
//hacer un for con un  innerHTML para que esto se vea en pantalla
//canciones api
let urlCanciones = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums"
fetch(urlCanciones)    
.then(function (response) {
        return response.json() //json es un objeto
    })
    .then(function (data) {
        console.log(data)
        let info = data.data
        let lista = document.querySelector(".canciones")
        for (let i = 0; i < 4; i++) {
            let elementosDeLista = ""
            elementosDeLista += `<article>
        <img src="${info[i].image}" alt="">
        <p class="name">Nombre: ${data.data[i].title}</p>
        <p>Status: $(info[i].status)</p>        
        <a href="./detail-album.html">ir a detalle</a> 
        </article>`
        section[i].innerHTML += elementosDeLista
    }
    })
    .catch(function (error) {
        console.log(error)
    })

