const initialState = {
    beer: 'coors'
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GetBeer':
            return {
                ...state.beer
            }
            default:
                 console.log('something broke')
                 return state;
    }
}

// 3. create reducer with initial state and default case