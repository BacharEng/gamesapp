import { HStack, Text, List, ListItem , Image, Button} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropImageUrl from "./image-crop";


interface PropsGenres {
    onSelectGenre: () => void;
}

const Genres = ({ onSelectGenre }: PropsGenres) => {
    const {
        data, error
    } = useGenres();

    return (
        <>
        {error && <p>{error}</p>}
        <List >
            {
                data.map(genre => {
                    return <ListItem key={genre.id} paddingY={'7px'}>
                        <HStack>
                            <Image boxSize={'32px'} borderRadius={8} src={getCropImageUrl(genre.image_background)}/>
                            <Button onClick={onSelectGenre}>{genre.name}</Button><Text fontSize={'larger'}></Text>

                        </HStack>
                    </ListItem>
                })
            }
        </List>
        </>
    )
}

export default Genres;