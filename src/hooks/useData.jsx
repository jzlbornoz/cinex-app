import { useEffect, useRef, useState } from "react";
import { useGet } from "./useGet";
import initialState from "../initialState";

const useData = () => {
    //Se guardan los datos llamados de la api
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [trending, setTrending] = useState([]);
    // Estado de carga
    const [loading, setLoading] = useState(true);
    //Estados para la funcionalidades del buscador favoritos
    const [state, setState] = useState(initialState);
    const [search, setSearch] = useState("");
    const [heart, setHeart] = useState(false);
    //Llamados a la api
    const callMovies = "/discover/movie";
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
    const handleSelect = item => {
        toSelect(item);
    }

    //Add to favorites
    const addToFavorites = payload => {
        setState({
            ...state,
            favorites: [...state.favorites, payload],
        });
    };
    const handleFavorite = item => () => {
            addToFavorites(item); // Este parametro lo recibe la funcion en el componente favorite para lograr que la clase solo 
    };                            // se cambie en los favoritos
    

    //Sarch
    const inputRef = useRef(null);

    const handleSearch = () => {
        setSearch(inputRef.current.value);
    };

    //Placeholder de los posters
    const placeholder = (path, width) => {
        return path ? `https://image.tmdb.org/t/p/w${width}` + path : "http://www.proedsolutions.com/wp-content/themes/micron/images/placeholders/placeholder_large.jpg"
    } 

    return ({
        movies,
        loading,
        state,
        handleSelect,
        series,
        trending,
        search,
        handleSearch,
        inputRef,
        handleFavorite,
        heart,
        placeholder
    });
};

export { useData };