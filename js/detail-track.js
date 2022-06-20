let queryString = location.search;
let qsToObject = new URLSearchParams(queryString);
let idCancion = qsToObject.get('id');
console.log(idCancion);

let proxy = "https://cors-anywhere.herokuapp.com/";
let endpoint = "https://api.deezer.com/track/";

let urlTrack = `${proxy}${endpoint}${idCancion}`;

fetch(urlTrack)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);

    let titulo = document.querySelector(".nombrecancion");
    let cantante = document.querySelector(".artistadecancion")
    let album = document.querySelector(".albumdecancion")


    let urlDeImagen = data.album.cover

    titulo.innerHTML= data.title 
    cantante.innerHTML = data.artist.name 
    album.innerHTML = data.album.title
    

    let foto = document.createElement('img')
    foto.src  = urlDeImagen
    document.querySelector('.infocancion').appendChild(foto)

    //guardar a playlist

    let playlist = []

    let recuperoStorage = localStorage.getItem("playlist");

    if(recuperoStorage){ //null o undefined => false //tiene una variable => true
        let playlistToArray = JSON.parse(recuperoStorage)
        playlist = playlistToArray
    }

    let link= document.querySelector("a");

    if(playlist.includes(idCancion)){
        //cambiarle el mensaje al usuario.
        link.innerText = "Sacar de playlist"
    }

    //Definir un evento para el link
    link.addEventListener("click", function(evento){
        //evitar default del link
        evento.preventDefault()

        if(playlist.includes(idGif)){
            //Sacar el id del array
            let gifASacar = playlist.indexOf(idCancion)
            playlist.splice(gifASacar, 1);
            link.innerText="Agregar a playlist"

        } else {
            //Agregar un data al array
            playlist.push(idCancion);
            link.innerText = "Sacar de playlist"

        }
    
        //Agregar el array a localStorage. Antes hay que pasarlo a string
        let gifFavoritosToString = JSON.stringify(playlist);
        localStorage.setItem('playlist', gifFavoritosToString)


        console.log(localStorage.getItem("playlist"));




})

.catch(function(error){
    console.log('el error fue ' + error);
})
})
