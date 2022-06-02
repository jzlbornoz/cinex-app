import { useEffect, useRef, useState } from "react";
import { useGet } from "./useGet";
import initialState from "../initialState";

const useData = () => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [trending, setTrending] = useState([]);
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(initialState);
    const [search, setSearch] = useState("");
    const callMovies = search ? "/search/movie?" + search : "/discover/movie";
    const callSeries = search ? "/search/movie?query=" + search : "/discover/tv";
    const callTrending = search ? "/search/movie?query=" + search : "/trending/all/day";

    //call the movies
    useEffect(() => {
        useGet(callMovies).then(data => {
            setMovies(data.results);
        })
    }, [search])

    //call the series
    useEffect(() => {
        useGet(callSeries).then(data => {
            setSeries(data.results);
        })
    }, [search])

    //call the trending
    useEffect(() => {
        useGet(callTrending).then(data => {
            setLoading(true);
            setTrending(data.results);
            setLoading(false);
            //console.log(data.results);
        })
    }, [search])

    //Select the movie
    const toSelect = payload => {
        setState({
            ...state,
            selected: [payload],
        });
    };

    //Sarch
    const inputRef = useRef(null);

    const handleSearch = () => {
        setSearch(inputRef.current.value);
        //console.log(search);
    };


    return ({
        movies,
        loading,
        state,
        toSelect,
        series,
        trending,
        search,
        handleSearch,
        inputRef
    });
};

export { useData };