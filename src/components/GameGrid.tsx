import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GameCard from "./GameCard";
import { Game } from "../services/Game";

const GameGrid = () => {
    const {
        games, error
    } = useGames();

    console.log(
        Array.from(new Set(games
            .map(g => g.platforms.map(p => p.platform.slug)).flat().flat()))
            )

    return (
        <>
        {error && <p>{error}</p>}
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={10} padding={10}>
            {
                games.map(game => {
                    return <GameCard key={game.id} game={game} />
                })
            }
        </SimpleGrid>
        </>
    )
}

export default GameGrid;


export const getSlugAndPrintAllTheListSlugs = (platform: Game['platforms'][0]['platform'][][]) => {
    const slugs = platform.map(g => g.map(p => p.slug))
    return Array.from(new Set(slugs.flat().flat()))
}

