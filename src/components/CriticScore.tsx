import { Badge } from "@chakra-ui/react";


interface CriticScoreProps {
    score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
    const color = score >= 90 ? 'green' : score >= 80 ? 'yellow' : 'red';
    return (
        <>
        <Badge fontSize={'16px'} paddingX={2} colorScheme={color} borderRadius={'4px'}>{score}</Badge>
        </>
    )
}

export default CriticScore;

