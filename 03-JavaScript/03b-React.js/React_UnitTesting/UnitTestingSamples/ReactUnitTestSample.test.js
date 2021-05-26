import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ReactUnitTestSample from './ReactUnitTestSample';
import { render, fireEvent } from "@testing-library/react";
import { SearchBox } from "./SearchBox"
/**
 * This is using purely Jest and Testing Library. 
 */

// setup and teardown
let container = null;

beforeEach(() => {
    //TODO: setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    //TODO: Clean up when exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe("Testing the ReactUnitTestSample Component to see that", () => {
    // arrange
    // TODO: Mocking of dependencies or external components

    // act
    it("renders with or without a name", () => {
        act(() => {
            //TODO: render components
            render(<ReactUnitTestSample />, container);
        });
        // assert
        expect(container.textContent).toBe("Hey, stranger");

        act(() => {
            //TODO: render components
            render(<ReactUnitTestSample name="Kristel" />, container);
        });
        // assert
        expect(container.textContent).toBe("Hello, Kristel!");
    });
});

describe("Testing the SearchBox Component", () => {
    describe("ensuring that the layout is rendered correctly", () => {
        const { queryByTestId, queryByPlaceholderName } = render(<SearchBox />)
        it("displays the input field", () => {
            expect(queryByPlaceholderText("Search")).toBeTruthy();
        });
        it("displays the search button", () => {
            // looks for a tag with "data-testid" attribute
            expect(queryByTestId("search-button")).toBeTruthy();
        });
    });
    describe("the functions are correct", () => {
        describe("Input Value", () => {
            it("updates on change", () => {
                const { queryByPlaceholderText } = render(<SearchBox />)
                const searchInput = queryByPlaceholderName('Search');
                fireEvent.change(searchInput, { targer: { value: "test" } });
                expect(searchInput.value).toBe("test");
            });
        });
        describe("Search button", () => {
            describe("with empty query", () => {
                it("it does not trigger requestSearch()", () => {
                    const requestSearch = jest.fn();
                    const { queryByTestId } = render(<SearchBox requestSearch={requestSearch} />)
                    fireEvent.click(queryByTestId('search-button'));
                    expect(requestSearch).notToHaveBeenCalled();
                });
            });
            describe("with data inside query", () => {
                it("triggers requestSearch()", () => {
                    const requestSearch = jest.fn();
                    const { queryByTestId, queryByPlaceholderText } = render(<SearchBox requestSearch={requestSearch} />)
                    const searchInput = queryByPlaceholderText('Search');
                    fireEvent.change(searchInput, { target: { value: "test" } });
                    fireEvent.click(queryByTestId, ('search-button'));
                    expect(requestSearch).toHaveBeenCalled();
                });
        });
    });
});
    
});