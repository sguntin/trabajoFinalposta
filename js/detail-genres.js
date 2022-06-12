// QueryString
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

// ID de genero
let idDeGenero = queryStringObj.get("id");
let nombreDeGenero = queryStringObj.get("name");

// URL de la api de los artistas del genero
let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/genre/" + idDeGenero + "/artists";

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

      // creo los elementos nuevos
      let articulo = document.createElement("article");
      let titulo = document.createElement("h1");
      let imagen = document.createElement("img");
      let texto = document.createElement("p");

      // les doy las propiedades que necesitan
      titulo.innerHTML = nombreDeGenero;
      imagen.src = urlDeImagen;
      texto.innerHTML = name;

      // los agrego al articulo
      articulo.appendChild(titulo);
      articulo.appendChild(imagen);
      articulo.appendChild(texto);

      // los agrego al elemento padre
      elementoPadre.appendChild(articulo);
    }
  })
  .catch(function (error) {
    console.log(error);
  });