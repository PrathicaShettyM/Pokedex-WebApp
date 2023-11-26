import './App.css'
import Pokedex from './components/PokeDex/Pokedex'
import { Route, Routes } from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'

function App() {
  return (
    <>
      <Routes>
        <Route to="/" element={<Pokedex />}/>
        <Route to="/pokemon/:id" element={<PokemonDetails />}/>  

      </Routes>  
    </>
  )
}

export default App
