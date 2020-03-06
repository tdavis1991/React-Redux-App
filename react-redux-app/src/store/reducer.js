import { FETCHING_CHARACTERS_START, FETCHING_CHARACTERS_SUCCESS } from './actions';

export const initialState = {
    characters: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_CHARACTERS_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCHING_CHARACTERS_SUCCESS:
            // const character = action.payload
            return {
                ...state,
                characters: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
}

