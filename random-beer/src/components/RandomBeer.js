import React from 'react';
import { connect } from 'react-redux';

export const RandomBeer = () => {

        console.log();
    return (
        <p>
            This <code>(//This is from RandomBeer component.)</code> 
        </p>
    )
}

// 4. create component and export to App.js
// 6. connect component to Redux store to update UI with API call

const mapStateToProps = state => {
    return {
        randombeer: state.beer
    }
}

connect(mapStateToProps, {})(RandomBeer);

