import {SET_USER, POST_USER} from '../actions/types.js';

const initialState = {
    customerID: "",
    username: "",
}

export default function( state = initialState, action ) {
    switch(action.type) {
        default:
            return state;

    }
}