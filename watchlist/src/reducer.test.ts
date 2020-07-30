import {addMovie, reducer, State} from "./reducer";
import {deleteMovie} from "./components/watchedMovies";

describe("Reducer", () => {
    it("should add a movie", () => {
        const initialState: State = {
            movies: []
        }

        const finalState = reducer(initialState, addMovie("Terminator"))

        expect(finalState.movies[0].name).toEqual("Terminator")
        expect(finalState.movies[0].watched).toBeFalsy()

    })

    it("should delete a movie", () => {
        const initialState: State = {
            movies: [{name: "Terminator", watched: false, id: "testId1"},
                {name: "Terminator 2", watched: false, id: "testId2"},
                {name: "Terminator 3", watched: false, id: "testId3"}]
        }

        const finalState = reducer(initialState, deleteMovie("testId2"))

        expect(finalState.movies.find((m) => m.name == "Termintor 2")).toBeUndefined()

    })
})
