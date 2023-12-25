import { Game } from "../services/Game";
import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import imageCrop from "./image-crop";


interface PropsGameCard {
    game: Game;
}

const GameCard = ({game}: PropsGameCard) => {
    



    return (
        <Card borderRadius={12} overflow={'hidden'} >
            <Image src={imageCrop(game.background_image)} alt={game.name}  />
            <CardBody>
                <Heading fontSize={'2xl'}>{game.name}</Heading>
                <HStack justifyContent={'space-between'} >
                    <PlatformIconList platforms={game.platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic}  />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard;