import './Search.css'
import useDebounce from '../../hooks/useDebounce';

function Search({updateSearchTerm}){
    const debounceUpdateSearch = useDebounce((e) => updateSearchTerm(e.target.value));
    return (
        <input 
            id='search-pokemon'
            type='text' 
            placeholder="Which Pokemon you're looking for ?"
            onChange={debounceUpdateSearch}
            />
    );
}

export default Search;