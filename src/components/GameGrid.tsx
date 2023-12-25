import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GameCard from "./GameCard";

const GameGrid = () => {
    const {
        data, error
    } = useGames();

    return (
        <>
        {error && <p>{error}</p>}
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={10} padding={10}>
            {
                data.map(game => {
                    return <GameCard key={game.id} game={game} />
                })
            }
        </SimpleGrid>
        </>
    )
}

export default GameGrid;