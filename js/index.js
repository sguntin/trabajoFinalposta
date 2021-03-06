fetch(" https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0")
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log (data.data)
    return data })
    .then (function(data){
        console.log (data)
    let ul_canciones = document.querySelector(".ul_canciones")
    let ul_albumes = document.querySelector(".ul_albumes")
    let ul_artistas = document.querySelector(".ul_artistas")

    for (let i = 0; i <= 4; i++) {

        ul_canciones.innerHTML += `
        <li>
        <img src="${data.tracks.data[i].album.cover_xl}"
            <a href="detail-track.html?id=${data.tracks.data[i].id}">${data.tracks.data[i].title_short}</a> 
            <a href="detail-artist.html?id=${data.tracks.data[i].artist.id}">${data.tracks.data[i].artist.name}</a>
        </li>
    `
    ul_albumes.innerHTML += `
        <li>
            <img src="${data.albums.data[i].cover_xl}"
            <a href="detail-album.html?id=${data.albums.data[i].id}">${data.albums.data[i].title}</a>
            <a href="detail-artist.html?id=${data.albums.data[i].artist.id}">${data.albums.data[i].artist.name}</a>
        </li>
    `
    ul_artistas.innerHTML += `
        <li>
            <img src="${data.artists.data[i].picture_xl}"
            <a href="detail-artist.html?id=${data.artists.data[i].id}">${data.artists.data[i].name}</a>
        </li>
        `
    }

})
.catch(function(error) {console.log(error)})
