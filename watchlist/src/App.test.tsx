import {createStore} from "redux"
import {addMovie, reducer} from "./reducer";
import React from "react";
import {Provider} from "react-redux";
import {fireEvent, render} from "@testing-library/react";
import App from "./App";


describe("Add movie", () => {
    it("should add a movie to the store", () => {
        const store = createStore(reducer)

        store.dispatch(addMovie("Terminator"))
        store.dispatch(addMovie("Rombo"))

        const {getByRole } = render(
            <Provider store={store}>
                <App/>
            </Provider>
        );

        fireEvent.change(getByRole('textbox'), {value: "Rombo"})
        fireEvent.click(getByRole('button'))

        expect(store.getState().movies.find((movie) => movie.name == "Rombo")).toBeDefined()
    })
})
