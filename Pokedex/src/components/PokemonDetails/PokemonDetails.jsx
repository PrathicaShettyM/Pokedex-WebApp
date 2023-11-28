import usePokemon from '../../hooks/usePokemon';
import './PokemonDetails.css'

import { Link}  from 'react-router-dom';

function PokemonDetails(){
    const [pokemon] = usePokemon();
    
    return(
        <>
        <h1 className='pokedex-redirect'>
            <Link to = "/" className='link'>
                PokeDex
            </Link>
        </h1>
        {pokemon && <div className='pokemon-details-wrapper'>
            
            <div className='pokemon-detail-name'>
                {pokemon.name}
            </div>
            <div className='pokemon-image'>
                <img src={pokemon.image}/>
            </div>
            <div className='pokemon-attribute'>
                <div>
                    Height : {pokemon.height}
                </div>
                <div>
                    Weight : {pokemon.weight}
                </div>   
            </div>
            <div className='pokemon-types'>
                <h1>Type : </h1>{pokemon.types.map(t => <span className='type' key={t.type.name}>{t.type.name}</span>)}
            </div>
        </div>}
        </>
        
    );
}
export default PokemonDetails;