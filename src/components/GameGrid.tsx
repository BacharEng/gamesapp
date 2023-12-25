import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GameCard from "./GameCard";

const GameGrid = () => {
    const {
        games, error
    } = useGames();

    return (
        <>
        {error && <p>{error}</p>}
        <SimpleGrid columns={3} spacing={10}>
            {
                games.map(game => {
                    console.log(game)
                    return <GameCard key={game.id} game={game} />
                })
            }
        </SimpleGrid>
        </>
    )
}

export default GameGrid;




