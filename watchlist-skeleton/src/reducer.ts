import {AnyAction} from "redux";


export interface Movie {
    name: string;
    watched: boolean
}

export interface State {
    movies: Movie[]
}

const initialState = {movies: []}

export const addMovie = (name: string): AnyAction => ({
    type: 'ADD_MOVIE',
    name
})

export const toggleMovieAsWatched = (id: number): AnyAction => (
    {
        type: 'TOGGLE_WATCHED',
        index: id
    }
);

export const reducer = (state: State = initialState, action: AnyAction): State => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return {
                movies: [...state.movies, {name: action.name, watched: false}]
            }
        case 'TOGGLE_WATCHED':
            state.movies[action.index].watched = !state.movies[action.index].watched
            return {
                movies: [...state.movies]
            }
        case 'DELETE_MOVIE':
            return {
                movies: [...state.movies.filter(movie => movie.id !== action.id)]
            }
    }
    }
    return state
}
