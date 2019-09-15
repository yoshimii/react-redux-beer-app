import axios from 'axios';

export const FETCHING_BEER = 'FETCHING_BEER';
export const FETCHED_BEER = 'FETCHED_BEER';
export const FETCH_BEER_FAIL ='FETCH_BEER_FAIL';

export const fetchBeer = (page) => dispatch => {
    dispatch({ type: FETCHING_BEER });
    axios.get(`https://api.openbrewerydb.org/breweries?page=${page}&per_page=30`).then( res => {console.log(res)
        dispatch({ type: FETCHED_BEER, payload: res.data})
        }).catch(err => {
            dispatch({ type: FETCH_BEER_FAIL });
        });
    };
// 5. export asynchronous actions