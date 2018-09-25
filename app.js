//Third party api request
axios.get('https://pokeapi.co/api/v2/pokemon/3/')
// ON success this is what is running
.then(results => {
    //condense in the information into pokemon constant
    const pokemon = results.data;
    // grabbing information form the page look for ID of pokemonName
    const pokemonName = document.getElementById('pokemonName');
    //changing the innerhtml to the pokemon name
    pokemonName.innerHTML = pokemon.name;

    //checking if sprites exist
    if (pokemon.sprites) {
      //grabbing the list from the html by id called pokemonImages
      const pokemonImages = document.getElementById('pokemonImages');
      // looping through object keys
      Object.keys(pokemon.sprites).forEach(function(sprite) {
        //checking if object key has a value
        if (pokemon.sprites[sprite]) {
          // creating an image
          let image = document.createElement('img');
          // applying url to image src
          image.src = pokemon.sprites[sprite];
          //appending the image to the DOM
          pokemonImages.appendChild(image);
        }
      })
    }
    console.log(results);
  // const list = document.getElementById('appendMusic');
  // results.data.forEach(song => {
  //   let listItem = document.createElement('li');
  //   listItem.classList.add('list-group-item');
  //   listItem.innerHTML = song.title
  //   list.appendChild(listItem);
  // });
})
.catch(err => {
  console.error("OH NO I HAVE FAILED, HERE IS WHY:", err.message);
})