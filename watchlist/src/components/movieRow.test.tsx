import * as React from 'react'
import {render} from "@testing-library/react";
import MovieRow from "./movieRow";

describe("Movie row", () => {
    it("should display movies", () => {
        const {getByRole} = render(
            <MovieRow name={"Rombo"} watched={true} id={10} onClick={(index) => {} }/>
        )

        expect(getByRole('checkbox', {checked: true})).toBeTruthy()
    })
})
