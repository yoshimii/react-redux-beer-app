import React from 'react';

const SearchBar = (props) => {


    return(
        <form onSubmit={props.handleSubmit}>
        <input
        type='text'
        value={props.search}
        onChange={props.onChange}
        ></input>
        <button type='submit'>search</button>
        </form>
    )
}

export default SearchBar;