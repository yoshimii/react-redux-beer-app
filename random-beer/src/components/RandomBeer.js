import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBeer } from '../actions';

const RandomBeer = ({ fetchBeer, beer }) => {

    useEffect( () => {
        fetchBeer();
    }, [fetchBeer])

        console.log(beer);
    return (
        <div>
            This {beer.map(item => {
                return item.name
            })} .<code>(//This is from RandomBeer component.)</code> 
        </div>
    )
}

// 4. create component and export to App.js
// 6. connect component to Redux store to update UI with API call

const mapStateToProps = state => {
    return {
        beer: state.beer
    }
}

export default connect(
    mapStateToProps,
    { fetchBeer }
)(RandomBeer);

