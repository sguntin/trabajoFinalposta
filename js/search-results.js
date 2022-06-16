//query es una consulta
//{objeto}
//[lista, array!]
//(parametro, string, comodin)
//json javascript object notation forma de escribir objetos
//=asignacion == comparacion ===comparacion especifica
//+= agregamos cosas
//$agregas variables
// let JSON = "An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format."

let query = location.search // http://stackoverflow.com/questions?q=algo
let objetoQuery = new URLSearchParams(query)
let terminoBuscado = objetoQuery.get('q')

let proxy = "https://api.allorigins.win/raw?url="
let endpoint = "https://api.deezer.com/search?q="

let url = `${proxy}${endpoint}${terminoBuscado}`

fetch(url)
    .then(function(response)  {
        return response.json()
    })
    .then(function(data) {
        
        let gif = document.querySelector(".carga-enable")
        gif.innerText = ""

        let total = data.data.length

        let sinResultados = document.querySelector('.sin-resultados')
        let conResultados = document.querySelector('.con-resultados')

        if (total === 0) {

            // alert("No se encontraron resultados para esta busqueda")
            sinResultados.innerText = "No se encontraron resultados para esta busqueda"

        } else if (total > 0 && total < 6) {
            
            for (let i = 0; i < total; i++) {
                conResultados.innerHTML += `
                    <article>
                        <a href="./detail-artist.html?q="${data.data[i].id}>
                        <h1>${data.data[i].title_short}</h1>
                        </a>
                        <img src="${data.data[i].album.cover_xl}" alt="" />
                    </article>
                `
            }

        } else if (total > 5) {
            
            for (let i = 0; i < 5; i++) {
                conResultados.innerHTML += `
                    <article>
                        <a href="./detail-artist.html?q="${data.data[i].id}>
                        <h1>${data.data[i].title_short}</h1>
                        </a>
                        <img src="${data.data[i].album.cover_xl}" alt="" />
                    </article>
                `
            }

        }

    })
    .catch(function(error) {console.log(error)})