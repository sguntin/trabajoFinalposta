let queryString = location.search;
let qsToObject = new URLSearchParams(queryString);
let idArtista = qsToObject.get('id');
console.log(idArtista);

let proxy = "https://cors-anywhere.herokuapp.com/";
let endpoint = "https://api.deezer.com/artist/";

let urlArtista = `${proxy}${endpoint}${idArtista}`;

fetch(urlArtista)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);

let nombre = document.querySelector(".nombreartista")

let urlDeImagen = data.picture

nombre.innerHTML = data.name

let foto = document.createElement('img')
    foto.src  = urlDeImagen
    document.querySelector('.infoartista').appendChild(foto)

fetch(`${proxy}https://api.deezer.com/artist/${idArtista}/albums`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);

let albumes = document.querySelector(".albumes")
for ( let i = 0; i < 5 ; i++) {

albumes.innerHTML += ` <li> <a href= "detail-album.html?id=${data.data[i].id}"> ${data.data[i].title} </a></li>`

}



})
})

.catch(function(error){
    console.log('el error fue ' + error);
})
