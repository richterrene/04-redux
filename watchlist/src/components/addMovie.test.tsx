import {createStore} from "redux"
import {addMovie, reducer} from "../reducer";
import React from "react";
import {Provider} from "react-redux";
import {render, fireEvent} from "@testing-library/react";
import AddMovie from "./addMovie";


describe("Add movie", () => {
    it("should add a movie to the store", () => {
        const store = createStore(reducer)

        store.dispatch(addMovie("Terminator"))
        store.dispatch(addMovie("Rombo"))

        const { getByRole } =  render(
            <Provider store={store}>
                <AddMovie />
            </Provider>
        );

        fireEvent.change(getByRole('textbox'), {value: "Rombo"})
        fireEvent.click(getByRole('button'))

        expect(store.getState().movies.find((movie) => movie.name == "Rombo" )).toBeDefined()
    })
})
