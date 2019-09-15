import axios from 'axios';
export const FETCHING_BEER = 'FETCHING_BEER';
export const FETCHED_BEER = 'FETCHED_BEER';

export const fetchBeer = () => {
    axios.get('').then((res)=> {
        console.log('this axios call will return a random beer')
    }).catch(err => console.log('error from axios')
    )}

// 5. export asynchronous actions