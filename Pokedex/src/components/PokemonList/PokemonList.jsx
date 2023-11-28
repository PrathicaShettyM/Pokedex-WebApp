import Pokemon from '../Pokemon/Pokemon';
// axios - use to fetch api
import './PokemonList.css'
import usePokemonList from '../../hooks/usePokemonList';

function PokemonList(){
    
    const [pokemonListState, setPokemonListState] = usePokemonList();

    return(
        <>
            <div className='pokemon-list-wrapper'>
               
                <div>
                    <h2>Pokemon List</h2>
                </div>
                
                <div className='page-controls'>
                    <button onClick={()=>setPokemonListState({...pokemonListState, pokedexUrl: pokemonListState.prevUrl})}>Prev</button>
                    <button onClick={()=>setPokemonListState({...pokemonListState, pokedexUrl: pokemonListState.nextUrl})}>Next</button>
                </div>
                
                <div className='pokemon-list'> 
                    {pokemonListState.pokemonList.map((pokemon)=> <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id}/>)}
                </div>
            </div>
        </>
    );

}

export default PokemonList;