let queryString = location.search;
let qsToObject = new URLSearchParams(queryString);
let idCancion = qsToObject.get('id');
console.log(idCancion);

let proxy = "https://cors-anywhere.herokuapp.com/";
let endpoint = "https://api.deezer.com/track/";
let widget = "https://widget.deezer.com/widget/auto/track/";

let urlTrack = `${proxy}${endpoint}${idCancion}`;
let urlPlayer = `${widget}${idCancion}`;

fetch(urlTrack)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);

    let titulo = document.querySelector(".nombrecancion");
    let cantante = document.querySelector(".artistadecancion")
    let album = document.querySelector(".albumdecancion")
    let player = document.querySelector(".player")

    let urlDeImagen = data.album.cover_xl

    titulo.innerHTML= data.title 
    cantante.innerHTML = data.artist.name 
    cantante.href = "detail-artist.html?id="+data.artist.id
    album.innerHTML = data.album.title
    album.href = "detail-album.html?id="+data.album.id
    player.src = urlPlayer

    let foto = document.querySelector('main')
    foto.style.backgroundImage = `url(${urlDeImagen})`
    foto.src  = urlDeImagen
    

    //guardar a playlist

    let playlist = []

    let recuperoStorage = localStorage.getItem("playlist");

    if(recuperoStorage){ //null o undefined => false //tiene una variable => true
        let playlistToArray = JSON.parse(recuperoStorage)
        playlist = playlistToArray
    }

    let link= document.querySelector(".aniadir");

    if(playlist.includes(idCancion)){
        //cambiarle el mensaje al usuario.
        link.innerText = "Sacar de playlist"
    }

    //Definir un evento para el link
    link.addEventListener("click", function(evento){
        //evitar default del link
        evento.preventDefault()

        if(playlist.includes(idCancion)){
            //Sacar el id del array
            let CancionASacar = playlist.indexOf(idCancion)
            playlist.splice(CancionASacar, 1);
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

})
.catch(function(error){
    console.log('el error fue ' + error);
})