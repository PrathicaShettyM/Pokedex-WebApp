import { useEffect, useState } from 'react';
import Pokemon from '../Pokemon/Pokemon';
import axios from 'axios';
// axios - use to fetch api
import './PokemonList.css'

function PokemonList(){
    const [pokemonList, setPokemonList] = useState([]);
    const POKEDEX_URL = "https://pokeapi.co/api/v2/pokemon";

    async function downloadPokemons(){
        const response = await axios.get(POKEDEX_URL);
        
        const pokemonResults = response.data.results; // array of pokemons

        const pokemonPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url)); // array of promises
        
        const pokemonListData = await axios.all(pokemonPromise);

        const pokemonFinalList = pokemonListData.map(pokemonData => {
            const pokemon = pokemonData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types
            }
        })
        setPokemonList(pokemonFinalList)
        console.log(pokemonFinalList);




    }

    useEffect(()=>{
        downloadPokemons()
    },[]);

    return(
        <>
            <div className='pokemon-list-wrapper'>
                <div className='pokemon-list-header'>Pokemon List</div>
                <div className='pokemon-list'> 
                    {pokemonList.map((pokemon)=> <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image}/>)}
                </div>
            </div>
        </>
    );

}

export default PokemonList;