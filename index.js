


async function fetchData() {
    try {

        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
        if (!response.ok) {
            throw new Error('Could not fetch resources');
        }


        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const [abilityOne,abilityTwo] = [data.abilities[0].ability.name, data.abilities[1].ability.name]
        const imgElement = document.getElementById('pokemonSprite');

        let description = document.getElementById('description');
        description.textContent = `Abilities : ${abilityOne}, ${abilityTwo}`;
        description.style.fontSize = '2rem';
        description.style.fontFamily = 'monospace';
        description.style.fontWeight = '900';

        let nameDisplay = document.getElementById('nameDisplay');
        nameDisplay.textContent = `${pokemonName}`;
        nameDisplay.style.fontSize = '3rem';
        nameDisplay.style.fontFamily = 'monospace';
        nameDisplay.style.fontWeight = '900';

        imgElement.src = pokemonSprite;
        imgElement.style.display = 'block';
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
}

fetchData()




















