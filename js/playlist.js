let proxy = "https://cors-anywhere.herokuapp.com/";
let endpoint = "https://api.deezer.com/track/";

let playlist = []

    let recuperoStorage = localStorage.getItem("playlist");

    if(recuperoStorage){ //null o undefined => false //tiene una variable => true
        let playlistToArray = JSON.parse(recuperoStorage)
        playlist = playlistToArray
    }
 lista = document.querySelector(".todoplaylist")   
for ( let i = 0; i < playlist.length; i++) {

fetch(`${proxy}${endpoint}${playlist[i]}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
lista.innerHTML += ` <li><img src="${data.album.cover_xl}" ><p><i class="fa-solid fa-heart-circle-check"></i> <a class="canciondeplaylist" href="./detail-track.html?id=${data.id}"> ${data.title} </a> </p></li>`






})

}
