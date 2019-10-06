import { SET_DIRECTORY_PATH, SET_DIRECTORY_CONTENT, SET_REPOSITORIES, SET_CURRENT_REPOSITORY } from "./actionTypes";
import { combineReducers } from "redux";


const initialRepositoryStore = {
    repositories: [],
    currentRepository: '',
}

const repositories = (state = initialRepositoryStore, action) => {
    switch (action.type) {
        case SET_REPOSITORIES:
            return {
                ...state,
                repositories: action.payload,
            }
        case SET_CURRENT_REPOSITORY:
            return {
                ...state,
                currentRepository: action.payload,
            }
        default:
            return state;
    }
}

const initialDirectoryStore = {
    path: '/src/sdf',
    content: ['dir', 'file.txt' ],
}

const directory = (state = initialDirectoryStore, action) => {
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
    repositories,
    directory,
})