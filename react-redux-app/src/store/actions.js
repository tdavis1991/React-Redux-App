import axios from 'axios';

export const FETCHING_CHARACTERS_START = 'FETCHING_CHARACTERS_START';
export const FETCHING_CHARACTERS_SUCCESS = 'FETCHING_CHARACTERS_SUCCESS';
export const FETCHING_CHARACTERS_ERROR = 'FETCHING_CHARACTERS_ERROR';

export const getCharacters = () => dispatch => {
    dispatch({ type: FETCHING_CHARACTERS_START })

    axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
            console.log('res', res.data.results)
            dispatch({ type: FETCHING_CHARACTERS_SUCCESS, payload: res.data.results })
        }).catch(err => {
            console.log('error', err)
            dispatch({ 
                type: FETCHING_CHARACTERS_ERROR, 
                payload: `${err.response.message} with response code ${err.response.code}`
            })
        })
}