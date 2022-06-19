let queryString = location.search;
let qsToObject = new URLSearchParams(queryString);
let idArtista = qsToObject.get('id');
console.log(idArtista);

let proxy = "https://cors-anywhere.herokuapp.com/";
let endpoint = "https://api.deezer.com/artist/27";

let urlArtista = `${proxy}${endpoint}`;

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




})

.catch(function(error){
    console.log('el error fue ' + error);
})
