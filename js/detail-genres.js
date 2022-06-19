// QueryString
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

// ID de genero
let idDeGenero = queryStringObj.get("id");
let nombreDeGenero = queryStringObj.get("name");

// URL de la api de los artistas del genero
let proxy = "https://cors-anywhere.herokuapp.com/";
let endpoint = "https://api.deezer.com/genre/";

let url = `${proxy}${endpoint}${idDeGenero}/artists`;

// Elemento padre
let elementoPadre = document.querySelector(".maindg");

// Aca estamos buscando la data de la api
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let listaDeArtistas = data.data;

    // For loop para crear los elementos
    for (let i = 0; i < listaDeArtistas.length; i++) {
      let artista = listaDeArtistas[i];

      // guardo la data del artista
      let urlDeImagen = artista.picture_medium;
      let name = artista.name;

      let html = `
        <article>
          <h1>${nombreDeGenero}</h1>
          <img src="${urlDeImagen}" />
          <p>${name}</p>
        </article>
      `;

      // los agrego al elemento padre
      elementoPadre.innerHTML += html;
    }
  })
  .catch(function (error) {
    console.log(error);
  });