import React from 'react'

/**
 * A function that takes a props "name" and returns a text.
 * @param {*} props 
 * @returns Hello, "name" - if props.name is supplied
 *          Hello, stranger - if props.name is missing
 */
export default function ReactUnitTestSample(props) {
    if(props.name) {
        return <h1>Hello, {props.name}!</h1>;
    }
    else {
        return <span>Hey, stranger</span>;
    }
}

/**
 * SearchBox function component that has two functions defined
 * 1) searchClick 
 * 2) updateQuery
 * @param {} param0 
 * @returns 
 */
export const SearchBox = ({requestSearch}) =>{
    const[query, setQuery] = React.useState("");

    //triggered when searchButton is clicked
    const searchClick = () => {
        if(query){
            requestSearch(query);
        }
    };

    //triggered everytime the input value changes
    const updateQuery = e => {
        setQuery(e.target.value);
    };

    return (
        <Container>
            <input 
                type="text"
                name="search"
                placeholder="Search"
                value={query}
                onChange={updateQuery}
            />
            <SearchButton data-testid="search-button" onClick={searchClick}/>
        </Container>
    );
};