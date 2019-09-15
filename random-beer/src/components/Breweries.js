import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchBeer } from '../actions';
import Brewery from './Brewery';

const Breweries = ({ fetchBeer, beer, fetching }) => {
    const [ page, setPage ] = useState(1);

    useEffect( () => {
        fetchBeer(page);
        console.log(page)
    }, [page])

    if(fetching) {
        return <p>loading breweries</p>
    }

    const prevPage = () => {
        if(page === 1){
            console.log(page)
            fetchBeer(page);
            return;
        }else 
        setPage(page - 1);
        console.log(page);
        fetchBeer(page);
    }
    const nextPage = () => {
        setPage(page +1);
        console.log(page);
        fetchBeer(page);
    }

    return ([
        <button onClick={prevPage}>Prev page</button>,
        <button onClick={nextPage}>Next page</button>,
        <div>
                {beer.map(item => {
                return <Brewery
                key={item.id}
                name={item.name}
                city={item.city}
                street={item.street}
                type={item.brewery_type}
                website={item.website}
                />
            })}  
        </div>
    ])
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
)(Breweries);

