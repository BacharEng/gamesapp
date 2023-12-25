import useGames from "../hooks/useGames"

const GameGrid = () => {
    const {
        games, error
    } = useGames();

    return (
        <>
        {error && <p>{error}</p>}
        <ul>
            {
                games.map(game => {
                    console.log(game)
                    return <li key={game.id}>
                        {game.name}
                    </li>
                })
            }
        </ul>
        </>
    )
}

export default GameGrid;




