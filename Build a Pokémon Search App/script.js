document.getElementById('search-button').addEventListener('click', searchPokemon);

function searchPokemon() {
    const searchInput = document.getElementById('search-input').value.trim().toLowerCase();
    if (!searchInput) return;

    fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
        .then(response => {
            if (!response.ok) throw new Error('Pokémon not found');
            return response.json();
        })
        .then(pokemon => {
            displayPokemonInfo(pokemon);
        })
        .catch(error => {
            alert(error.message);
            document.getElementById('pokemon-info').style.display = 'none';
        });
}

function displayPokemonInfo(pokemon) {
    document.getElementById('pokemon-info').style.display = 'block';

    document.getElementById('pokemon-name-id').textContent = `${pokemon.name.toUpperCase()} #${pokemon.id}`;
    document.getElementById('weight-height').textContent = `Weight: ${pokemon.weight} Height: ${pokemon.height}`;

    const spriteElement = document.getElementById('sprite');
    spriteElement.src = pokemon.sprites.front_default;
    spriteElement.alt = pokemon.name;

    const typesContainer = document.getElementById('types');
    typesContainer.innerHTML = '';
    pokemon.types.forEach(type => {
        const typeElement = document.createElement('span');
        typeElement.textContent = type.type.name.toUpperCase();
        typeElement.classList.add('type-badge');
        typesContainer.appendChild(typeElement);
    });

    document.getElementById('hp').textContent = pokemon.stats[0].base_stat;
    document.getElementById('attack').textContent = pokemon.stats[1].base_stat;
    document.getElementById('defense').textContent = pokemon.stats[2].base_stat;
    document.getElementById('special-attack').textContent = pokemon.stats[3].base_stat;
    document.getElementById('special-defense').textContent = pokemon.stats[4].base_stat;
    document.getElementById('speed').textContent = pokemon.stats[5].base_stat;
}
