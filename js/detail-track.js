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






})

.catch(function(error){
    console.log('el error fue ' + error);
})

