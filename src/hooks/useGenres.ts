import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
}

const useGenres = () => {
    const {data, error} = useData<Genre>('genres');
    

    return {
        data,
        error
    }
};

export default useGenres;