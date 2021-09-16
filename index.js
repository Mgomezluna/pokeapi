const api = "https://pokeapi.co/api/v2/pokemon/"


 const getPokemon = async (pokemon ="pikachu")=>{
   let response = await fetch(`${api}${pokemon}`)
   let pokemonP = await response.json()
    console.log(pokemonP.name);
    return pokemon;
}

const getPokemonLimit = async () =>{
    let response = await fetch(`${api}?limit=15`)
    let result = await response.json();
    pokeList = result.results.map(response => response.name)
    console.log(pokeList)
 }

//obtener 15 pokemons  y sacar los quue pesen mas de 150
async function getPokemonsWeight(){

    // consumir la api 
    let pokemon = await fetch(`${api}?offset=100&limit=15`);

       // convierto la data a json 
    let pokemons= await (pokemon.json());

    //hago un nuevo fetch para traerme la url que esta dentro de  los resultados de pokemon  
     const arrayPokemon= await pokemons.results.map(res=> fetch(res.url));

     //recorro el array de chimpokomons de nuevo para sacar el peso 
     const pokemonWeight= await Promise.all(arrayPokemon.map(pokeW=> pokeW.json()));

     //hago el filter del array
     const filterPrueba= pokemonWeight.filter(data=> data.weight>=150);
     console.log(filterPrueba);
}


 getPokemonsWeight();
 getPokemon();
 getPokemonLimit();