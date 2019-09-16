import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchBeer, searchBrewery } from '../actions';
import Brewery from './Brewery';
import SearchBar from './SearchBar';

const Breweries = ({ fetchBeer, searchBrewery, beer, fetching }) => {
    const [ page, setPage ] = useState(1);
    const [ search, setSearch] = useState('');

    useEffect( () => {
        // fetchBeer(page);
        return searchBrewery(search)

    },[search])

    useEffect( () => {
      return fetchBeer(page);
        // searchBrewery(search)

    }, [page])

    console.log(search)
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

    const onChange = (e) => {
        setSearch(e.target.value);        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
        // searchBrewery(search);
        console.log(search)
        setSearch('');
    }

    return ([
        <SearchBar search={search} onChange={onChange} onSubmit={handleSubmit}/>,
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
                website={item.website_url}
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
    { fetchBeer, searchBrewery }
)(Breweries);

