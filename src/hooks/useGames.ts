import { Game } from "../services/Game";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface FetchGamesResponse { count: number, results: Game[] }



const useGames = (selectedGenre?: Genre | null) => {
    const { data,  error } = useData<Game>('/games?page_size=20', {params: selectedGenre});
    
    return {
        data, 
        error,         
    }
}


export default useGames;