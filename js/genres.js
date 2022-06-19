// URL de la api de generos
let proxy = "https://cors-anywhere.herokuapp.com/";
let endpoint = "https://api.deezer.com/genre";

let url = `${proxy}${endpoint}`;

// Elemento padre
let elementoPadre = document.querySelector(".contenidogenres ul");

// Aca estamos buscando la data de la api
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let listaDeGeneros = data.data;

    // For loop para crear los elementos
    for (let i = 0; i < listaDeGeneros.length; i++) {
      let genero = listaDeGeneros[i];

      // guardo la data del genero
      let urlDeImagen = genero.picture_medium;
      let name = genero.name;

      let html = `
        <li>
          <img src="${urlDeImagen}" />
          <a href="detail-genres.html?id=${genero.id}&name=${name}"> 
            <h2 class="txtgenres">${name}</h2>
          </a>
        </li>
      `;

      // los agrego al elemento padre
      elementoPadre.innerHTML += html;
    }
  })
  .catch(function (error) {
    console.log(error);
  });