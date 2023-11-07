async function consomePokeAPI() {

    const loading = document.querySelector('#loading')

    try {

        const response = await fetch('https://pokeapi.co/api/v2/pokemon')

        const pokemonsDaAPI = response.json()
        console.log(pokemonsDaAPI)
        return pokemonsDaAPI

    } catch (error) {
        console.log(error)
    } finally {
        loading.classList.add('hidden')
    }
}

consomePokeAPI()