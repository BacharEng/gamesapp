import React from "react";

import { Game } from "../services/Game";
import { Card, Image, CardBody, Heading } from "@chakra-ui/react";


interface PropsGameCard {
    game: Game;
}

const GameCard = ({game}: PropsGameCard) => {


    return (
        <Card>
            <Image src={game.background_image} alt={game.name} />
            <CardBody><Heading>{game.name}</Heading></CardBody>
        </Card>
    )
}

export default GameCard;




