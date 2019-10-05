import { SET_DIRECTORY_PATH, SET_DIRECTORY_CONTENT } from "./actionTypes";
import { combineReducers } from "redux";

const initialSearchStore = {
    path: '/src/sdf',
    content: ['dir', 'file.txt' ],
}

const directory = (state = initialSearchStore, action) => {
    switch (action.type) {
        case SET_DIRECTORY_CONTENT:
            return {
                ...state,
                content: action.payload,
            }
        case SET_DIRECTORY_PATH:
            return {
                ...state,
                path: action.payload,
            }
        default:
            return state;
    }
}

export default combineReducers({
    directory,
})