import axios from 'axios';

export const FETCHING_BEER = 'FETCHING_BEER';
export const FETCHED_BEER = 'FETCHED_BEER';
export const FETCH_BEER_FAIL ='FETCH_BEER_FAIL';
export const SEARCHING = 'SEARCHING';
export const SEARCHED_BEER = 'SEARCHED_BEER';
export const SEARCH_BEER_FAIL = 'SEARCH_BEER_FAIL';

export const fetchBeer = (page) => dispatch => {
    dispatch({ type: FETCHING_BEER });
    axios.get(`https://api.openbrewerydb.org/breweries?page=${page}&per_page=30`).then( res => {console.log(res)
        dispatch({ type: FETCHED_BEER, payload: res.data })
        }).catch(err => {
            dispatch({ type: FETCH_BEER_FAIL });
        });
    };

export const searchBrewery = (search) => dispatch => {
    dispatch({ type: SEARCHING });
    axios.get(`https://api.openbrewerydb.org/breweries?by_city=${search}`).then(res => {
        console.log(res)
        dispatch({ type: SEARCHED_BEER, payload: res.data })
    }).catch( err => {
        dispatch({ type: SEARCH_BEER_FAIL});
    });
};
// 5. export asynchronous actions