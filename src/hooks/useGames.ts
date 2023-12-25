import { Game } from "../services/Game";
import useData from "./useData";

export interface FetchGamesResponse { count: number, results: Game[] }



const useGames = () => {
    const { data,  error } = useData<Game>('/games');
    
    return {
        data, 
        error,         
    }
}


export default useGames;