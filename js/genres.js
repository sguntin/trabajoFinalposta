// URL de la api de generos
let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/genre";

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

      // creo los elementos nuevos
      let li = document.createElement("li");
      let imagen = document.createElement("img");
      let link = document.createElement("a");
      let texto = document.createElement("h2");

      // les doy las propiedades que necesitan
      imagen.src = urlDeImagen;
      texto.innerHTML = name;
      texto.classList.add("txtgenres");
      link.href = "detail-genres.html?id=" + genero.id + "&name=" + name;

      // los agrego al li
      link.appendChild(texto);
      li.appendChild(imagen);
      li.appendChild(link);

      // los agrego al elemento padre
      elementoPadre.appendChild(li);
    }
  })
  .catch(function (error) {
    console.log(error);
  });