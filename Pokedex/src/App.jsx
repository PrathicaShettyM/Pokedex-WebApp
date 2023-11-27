import './App.css'
import Pokedex from './components/PokeDex/Pokedex'
import { Route, Routes } from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />  
        <Route path="*" element={<h1>Page Not Found</h1>} />  
      </Routes>  
  )
}

export default App
