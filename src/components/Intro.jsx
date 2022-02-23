const Intro = ({ startGame }) => {
    return (
        <div className="pre-game">
            <div className="pre-game-title">
                Demuestra cuanto sabes de pokemon
            </div>
            <div className="pre-game-desciption">
                <p>El juego consiste en adivinar que <strong>tipo</strong> de pokemon es el que se muestra</p>
                <ul>
                    <li> <strong>Si adivinas</strong>Capturaras el pokemon y se registrara en tu pokedex</li>
                    <li> <strong>Si No adivinas</strong>El pokemon escapara y no lo perderas</li>
                </ul>
                <p>Asi que piensalo muy bien antes de elegir el tipo de pokemon</p>
            </div>
            <div onClick={startGame} className="start-game">
                Empezar a jugar
            </div>
        </div>
    )
}

export default Intro;