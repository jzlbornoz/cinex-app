import { useEffect, useState } from "react";
import { useGet } from "./useGet";
import initialState from "../initialState";

const useData = () => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [trending, setTrending] = useState([]);
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(initialState);
    const callMovies = "/discover/movie";
    const callSeries = "/discover/tv";
    const callTrending = "/trending/all/day";

    //call the movies
    useEffect(() => {
        useGet(callMovies).then(data => {
            setMovies(data.results);
        })
    }, [])

    //call the series
    useEffect(() => {
        useGet(callSeries).then(data => {
            setSeries(data.results);
        })
    }, [])

    //call the trending
    useEffect(() => {
        useGet(callTrending).then(data => {
            setTrending(data.results);
            setLoading(false);
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
        series,
        trending,
    });
};

export { useData };