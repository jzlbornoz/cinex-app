import { useEffect, useState } from "react";
import { useGet } from "./useGet";

const useData = () => {
    const [movies, setMovies] = useState([]);
    const callMovies = "/discover/movie";
    //call the movies
    useEffect(() => {
        useGet(callMovies).then(data => {
            setMovies(data.results);
            console.log(data.results);
        })
    }, [])
    return ({
        movies
    })
};

export { useData };