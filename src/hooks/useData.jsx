import { useEffect, useState } from "react";
import { useGet } from "./useGet";
import initialState from "../initialState";

const useData = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(initialState);
    const callMovies = "/discover/movie";

    //call the movies
    useEffect(() => {
        useGet(callMovies).then(data => {
            setMovies(data.results);
            setLoading(false)
            console.log(data.results);
        })
    }, [])

    //Select the movie
    const toSelect = payload => {
        setState({
            ...state,
            selected: [payload],
        });
    };

    return ({
        movies,
        loading,
        state,
        toSelect,
    });
};

export { useData };