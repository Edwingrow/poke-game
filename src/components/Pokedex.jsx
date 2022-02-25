import React from 'react'
import PokedexItem from './PokedexItem'
const PokeDex = ({myPokemones, toogle}) => {
    
  return (
    <div className='pokedex'>
        <div className='pokedex-title'> Mi Pokedex ({myPokemones.length})</div>
        <div className='pokedex-container'>
            {
                myPokemones.map(pokemon =>{
                    return <PokedexItem pokemon={pokemon} />
                })
            }
        </div>
        <div onClick={() => {toogle(false)}} className="close-podedex">X</div>
    </div>
  )
}

export default PokeDex