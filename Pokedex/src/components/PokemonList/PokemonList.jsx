import { useEffect, useState } from 'react';
import Pokemon from '../Pokemon/Pokemon';
import axios from 'axios';
// axios - use to fetch api
import './PokemonList.css'

function PokemonList(){
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";

    const [pokemonList, setPokemonList] = useState([]);
    const [pokedexUrl, setPokedexUrl] = useState(DEFAULT_URL);

    const [nextUrl, setNextUrl] = useState(DEFAULT_URL);
    const [prevUrl, setPrevUrl] = useState(DEFAULT_URL);

    async function downloadPokemons(){
        const response = await axios.get(pokedexUrl? pokedexUrl : DEFAULT_URL);
        
        const pokemonResults = response.data.results; // array of pokemons

        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);

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
    },[pokedexUrl]);

    return(
        <>
            <div className='pokemon-list-wrapper'>
               
                <div>
                    <h2>Pokemon List</h2>
                </div>
                
                <div className='page-controls'>
                    <button onClick={()=> setPokedexUrl(prevUrl)}>Prev</button>
                    <button onClick={()=> setPokedexUrl(nextUrl)}>Next</button>
                </div>
                
                <div className='pokemon-list'> 
                    {pokemonList.map((pokemon)=> <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id}/>)}
                </div>
            </div>
        </>
    );

}

export default PokemonList;