const API = "https://api.themoviedb.org/3";

const useGet = (route) => {
    return fetch(API + route, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGJiODY2OWZhNjM2MzUyNDJkZTg4OWM5M2QyZGU1OSIsInN1YiI6IjYxOTJiNzdlMWY3NDhiMDA4ZTZhYjgxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XvhtPrIvY7cI7XkKaQqW8LiX-HILXfsjujKnHFWWEyQ",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then(results => results.json())
};

export { useGet }