import { 
    SET_DIRECTORY_PATH, SET_DIRECTORY_CONTENT, SET_REPOSITORIES, 
    SET_CURRENT_REPOSITORY, SET_CURRENT_BRANCH, SET_LIST_OF_BRANCHES, 
    SET_FILE_DATA,
    CLEAR_FILE_DATA
} from "./actionTypes";
import { combineReducers } from "redux";


const initialRepositoryState = {
    all: [],
    current: '',
}

const repositories = (state = initialRepositoryState, action) => {
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

const initialDirectoryState = {
    path: '',
    content: [],
}

const directory = (state = initialDirectoryState, action) => {
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

const initialBranchState = {
    current: 'master',
    list: [],
}

const branches = (state = initialBranchState, action) => {
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

const initialFileState = {
    name: '',
    path: '',
    content: null,
    lastUpdate: null,
}

const file = (state = initialFileState, action) => {
    switch (action.type) {
        case SET_FILE_DATA: {
            const pathArr = action.payload.path.split('/').filter((i) => i);

            return {
                ...state,
                name:  pathArr[pathArr.length - 1],
                path: action.payload.path,
                content: action.payload.content,
                lastUpdate: Date.now(),
            }
        }
        case CLEAR_FILE_DATA:
            return initialFileState;
        default:
            return state;
    }
}


export default combineReducers({
    repositories,
    directory,
    branches,
    file
})