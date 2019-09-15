const initialState = {
    beer: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GetBeer':
            return {
                ...state
            }
            default:
                 console.log('something broke')
                 return state;
    }
}