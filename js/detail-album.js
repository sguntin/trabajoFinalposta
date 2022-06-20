let queryString = location.search;
let qsToObject = new URLSearchParams(queryString);
let idAlbum = 302127;
console.log(idAlbum);

let proxy = "https://cors-anywhere.herokuapp.com/";
let endpoint = "https://api.deezer.com/album/";

let urlAlbum = `${proxy}${endpoint}${idAlbum}`;

fetch(urlAlbum)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);

    let titulo = document.querySelector(".nombrealbum");

    let cantante = document.querySelector(".nombreartista");

    let genero = document.querySelector(".nombregenero");
    let fecha = document.querySelector(".fecha");



    let urlDeImagen = data.cover


    titulo.innerHTML= data.title 

    cantante.innerHTML = data.artist.name 

    genero.innerHTML = data.genres.data[0].name

    fecha.innerHTML = data.release_date

    let foto = document.createElement('img')
    foto.src  = urlDeImagen
    document.querySelector('.infoalbum').appendChild(foto)

    let tracklist = document.querySelector(".lista");
        let temas = "";

        //Los elementos están en un array y para obtenerlos hay recorrerlo.
        for(let i=0; i<11; i++){
            //construir un elemento de lista
            temas = `<article>
                            <p class="name"> ${data.tracks.data[i].title}</p>
                            
                            <a href="detail-track.html?id=${data.tracks.data[i].id}">ir a detalle </a>
                        </article>`
        }
        console.log(temas);
        
        tracklist.innerHTML += temas

})

.catch(function(error){
    console.log('el error fue ' + error);
})
