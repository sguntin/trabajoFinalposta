let queryString = location.search;
let qsToObject = new URLSearchParams(queryString);
let idCancion = qsToObject.get('id');
console.log(idCancion);

let urlTrack = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556'

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
})

.catch(function(error){
    console.log('el error fue ' + error);
})

