import { SET_DIRECTORY_PATH, SET_DIRECTORY_CONTENT, SET_REPOSITORIES, SET_CURRENT_REPOSITORY, SET_CURRENT_BRANCH, SET_LIST_OF_BRANCHES } from "./actionTypes";
import { combineReducers } from "redux";


const initialRepositoryStore = {
    all: [],
    current: '',
}

const repositories = (state = initialRepositoryStore, action) => {
    switch (action.type) {
        case SET_REPOSITORIES:
            return {
                ...state,
                all: action.payload,
                current: action.payload.length && !state.current
                    ? action.payload[0]
                    : state.current,
            }
        case SET_CURRENT_REPOSITORY:
            return {
                ...state,
                current: action.payload,
            }
        default:
            return state;
    }
}

const initialDirectoryStore = {
    path: '',
    content: [],
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

const initialBranchStore = {
    current: 'master',
    list: [],
}

const branches = (state = initialBranchStore, action) => {
    switch (action.type) {
        case SET_CURRENT_BRANCH:
            return {
                ...state,
                content: action.payload,
            }
        case SET_LIST_OF_BRANCHES:
            return {
                ...state,
                list: action.payload,
            }
        default:
            return state;
    }
}

export default combineReducers({
    repositories,
    directory,
    branches,
})