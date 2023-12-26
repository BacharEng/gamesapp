import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GameCard from "./GameCard";
import { Genre } from "../hooks/useGenres";

interface PropsGameGrid {
    selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: PropsGameGrid) => {
    const {
        data, error
    } = useGames(selectedGenre);

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