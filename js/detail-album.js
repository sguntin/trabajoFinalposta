let queryString = location.search;
let qsToObject = new URLSearchParams(queryString);
let idAlbum = qsToObject.get('id');
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



    let urlDeImagen = data.cover_medium


    titulo.innerHTML= data.title 

    cantante.innerHTML = data.artist.name 
    cantante.href += `?id=${data.artist.id}`
    genero.innerHTML = data.genres.data[0].name
    genero.href += `?id=${data.genres.data[0].id}`
    fecha.innerHTML = data.release_date

    let foto = document.createElement('img')
    foto.src  = urlDeImagen
    document.querySelector('.infoalbum').appendChild(foto)

    let tracklist = document.querySelector(".lista");
        let temas = "";
    
        //Los elementos están en un array y para obtenerlos hay recorrerlo.
        for(let i=0; i<data.tracks.data.length; i++){
            
            //construir un elemento de lista
            temas += `<article> <a href="detail-track.html?id=${data.tracks.data[i].id}"><p class="name"> ${data.tracks.data[i].title}</p> </a> </article>`
        }
        console.log(temas);
        
        tracklist.innerHTML += temas

})

.catch(function(error){
    console.log('el error fue ' + error);
})
