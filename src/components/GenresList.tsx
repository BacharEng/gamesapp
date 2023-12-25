import useGenres from "../hooks/useGenres";


const Genres = () => {
    const {
        data, error
    } = useGenres();

    return (
        <>
        {error && <p>{error}</p>}
        <ul >
            {
                data.map(genre => {
                    return <li key={genre.id}>{genre.name}</li>
                })
            }
        </ul>
        </>
    )
}

export default Genres;