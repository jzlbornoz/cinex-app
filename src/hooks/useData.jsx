import { useEffect, useState } from "react";
import { useGet } from "./useGet";

const useData = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const callMovies = "/discover/movie";

    //call the movies
    useEffect(() => {
        useGet(callMovies).then(data => {
            setMovies(data.results);
            setLoading(false)
            console.log(data.results);
        })
    }, [])
    return ({
        movies,
        loading
    })
};

export { useData };