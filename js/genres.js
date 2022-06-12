let genres="https://api.allorigins.win/raw?url=https://api.deezer.com/genre/0"
fetch(genres)
.then(function (response) {
     return response.json();
     })
     .then(function(data){
        console.log(data);

        let info = data.data
        let section = document.querySelector(".generos");
        let articles = "";
     
for(let i=0; i<5; i++){

    articles += `<article>
        <img class="imagen" src="${info[i].artist.picture_medium}" alt="">
        <h2 class="nombres">genero:<a href="./detail-genres.html${info[i].id}">${info[i].name}</a></h2>
        <p class="nombresgrupo">Artista:<a href="./detail-genres.html${info[i].id}">${info[i].artist.name}</a<>/h2>
        <p class="nombresgrupo">Lanzamiento:${info[i].release-date}</p>
        </article>`

}
console.log(articles);
section.innerHTML += articles
})
.catch(function(error){
    console.log(error);
})