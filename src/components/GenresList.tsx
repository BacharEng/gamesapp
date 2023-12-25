import { HStack, Text, List, ListItem , Image} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropImageUrl from "./image-crop";


const Genres = () => {
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
                            <Text fontSize={'larger'}>{genre.name}</Text>
                        </HStack>
                    </ListItem>
                })
            }
        </List>
        </>
    )
}

export default Genres;