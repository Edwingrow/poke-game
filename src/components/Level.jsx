const Level1 = ({currentPokemon, catchPokemon, availablePokemons}) => {
    const {name, types, id, sprites} = currentPokemon;
    const pokemonTypes = ["Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon"]

    const pokemonClick = (type) =>{
        let loweCaseType = type.toLowerCase();
        let compareType = types.find(pokemonType => pokemonType.type.name === loweCaseType);
        if(typeof compareType !== 'undefined'){
            catchPokemon(currentPokemon);
        } else {
           catchPokemon(false, currentPokemon)
        }
    }
    return (
        <>
            {/* <div className='available-pokemons'>Pokemones por atrapar: ({availablePokemons.length})</div> */}
            <div className='pokemon-image'><img alt="pokemon" src={sprites.other['home']["front_default"]} /></div>
            <div className='pokemon-description'>
            <div className='pokedex-number'>Pokedex #{id}</div>
            <div className='pokemon-name'>{name}</div>
            </div>
            <div className='pokemon-type-container'>
                <div className='pokemon-type-title'>¿Que tipo de pokemon es?</div>
                <div className='pokemon-type-item-container'>
                    {pokemonTypes.map((pokemon, index) => { return (
                    <div onClick={() => {pokemonClick(pokemon)}}  key={index}>
                        {pokemon}
                    </div>) })}
                </div>
            </div>  
        </> 
    );
}
export default Level1;