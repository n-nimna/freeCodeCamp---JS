document.getElementById('search-button').addEventListener('click', searchPokemon);

function searchPokemon() {
    const searchInput = document.getElementById('search-input').value.trim().toLowerCase();
    if (!searchInput) {
        alert('Please enter a Pokémon name or ID');
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
        .then(response => {
            if (!response.ok) throw new Error('Pokémon not found');
            return response.json();
        })
        .then(pokemon => {
            displayPokemonInfo(pokemon);
        })
        .catch(error => {
            alert("Pokémon not found");
            document.getElementById('pokemon-info').style.display = 'none';
        });
}

function displayPokemonInfo(pokemon) {
    document.getElementById('pokemon-info').style.display = 'block';

    document.getElementById('pokemon-name').textContent = pokemon.name.toUpperCase();
    document.getElementById('pokemon-id').textContent = `#${pokemon.id}`;
    document.getElementById('weight').textContent = `Weight: ${pokemon.weight}`;
    document.getElementById('height').textContent = `Height: ${pokemon.height}`;

    const typesContainer = document.getElementById('types');
    typesContainer.innerHTML = '';
    pokemon.types.forEach(type => {
        const typeElement = document.createElement('span');
        typeElement.textContent = type.type.name.toUpperCase();
        typesContainer.appendChild(typeElement);
    });

    const spriteElement = document.getElementById('sprite');
    spriteElement.src = pokemon.sprites.front_default;
    spriteElement.alt = pokemon.name;

    document.getElementById('hp').textContent = pokemon.stats[0].base_stat;
    document.getElementById('attack').textContent = pokemon.stats[1].base_stat;
    document.getElementById('defense').textContent = pokemon.stats[2].base_stat;
    document.getElementById('special-attack').textContent = pokemon.stats[3].base_stat;
    document.getElementById('special-defense').textContent = pokemon.stats[4].base_stat;
    document.getElementById('speed').textContent = pokemon.stats[5].base_stat;
}
