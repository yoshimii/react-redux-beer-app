import { FETCHING_BEER, FETCHED_BEER } from "../actions";

const initialState = {
    beer: [],
    fetching: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_BEER:
            return {
                ...state,
                fetching: true
            }
        case FETCHED_BEER:
            console.log('FETCHED_BEER: rendered from state')
            return {
                ...state, beer: action.payload,
                fetching: false
            }
            default:
                 console.log('error from reducer')
                 return state;
    }
}

// 3. create reducer with initial state and default case