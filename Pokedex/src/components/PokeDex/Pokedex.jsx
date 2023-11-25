// css imports
import './Pokedex.css';
import Search from '../Search/Search';

function Pokedex(){
    return(
        <div className='pokedex-wrapper'>
            <h1>POKEDEX</h1>
            <Search/>
        </div>
    );
}

export default Pokedex;