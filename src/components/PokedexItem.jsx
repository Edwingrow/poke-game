const PokedexItem = ({pokemon}) => {
    const {name, id, sprites} = pokemon
    return (
        <div className='my-pokemon'>
            <div className='pokemon-image'> <img alt="pokemon" src={sprites.front_default} /></div>
            <div className='pokemon-description'>
                <div className="pokedex-number">#{id}</div>
                <div className="pokemon-name">{name}</div>
            </div>
        </div>


    );
}

export default PokedexItem;