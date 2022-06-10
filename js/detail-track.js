let urltrack = https://developers.deezer.com/api/track 

fetch(urltrack)
.then*=(function(response){
    return response.json();
})
.then(function.data){
    console.log(data);
}

.catch(function(error){
    console.log('el error fue ' + error);
})


let foto = document.querySelector(".img");

foto.src = 

let titulo = document.querySelector(".nombrecancion");

titulo.innerHTML += 

let artista = document.querySelector(".artistadecancion");
artista.innerHTML += 

