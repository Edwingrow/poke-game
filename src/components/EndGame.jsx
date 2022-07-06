const EndGame = ({missedPokemons,  myPokemons}) =>{
    return(
        <div className="pre-game">
            <div className="pre-game-title">El juego ha terminado</div>
            <div className="pre-game-description">
                <p>Estas son tus estadisticas</p>
                <ul>
                    <li><strong><span style={{color: "#43a047"}}>Atrapaste</span></strong>:{myPokemons.length} </li>
                    <li><strong><span style={{color: "#e53935"}}>Escaparon</span></strong>:{missedPokemons.length} </li>
                </ul>
                <p>Puedes ver la cantidad de pokemones que atrapaste en la Pokedex</p>
                <p>Para volver a jugar presiona F5</p>
            
            </div>
        </div>
    )
}

export default EndGame;