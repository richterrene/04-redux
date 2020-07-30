import {createStore} from "redux"
import {addMovie, reducer} from "../reducer";
import React from "react";
import {Provider} from "react-redux";
import Counter from "./counter";
import {render} from "@testing-library/react";


describe("counter", () => {
    it("should count the movies", () => {
        const store = createStore(reducer)

        store.dispatch(addMovie("Terminator"))
        store.dispatch(addMovie("Rombo"))

        const { container } =  render(
            <Provider store={store}>
                <Counter/>
            </Provider>
        );

        expect(container.textContent).toBe(" 2 left")
    })
})
