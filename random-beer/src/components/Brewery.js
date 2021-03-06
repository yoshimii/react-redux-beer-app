import React from 'react';

const Brewery = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Type: {props.type}</p>
            <p>City: {props.city}</p>
            <p>Street: {props.street}</p>
            <p><a href={`${props.website}`}>Website</a></p>
        </div>
    )
}

export default Brewery;