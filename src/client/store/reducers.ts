import {
    SET_DIRECTORY_PATH, SET_DIRECTORY_CONTENT, SET_REPOSITORIES,
    SET_CURRENT_REPOSITORY, SET_FILE_DATA, CLEAR_FILE_DATA,
} from './actionTypes';
import { combineReducers } from 'redux';
import { FileState, ActionRedux, DirectoryState, RepositoryState } from './types';


const initialRepositoryState: RepositoryState = {
    all: [],
    current: '',
};

const repositories = (state = initialRepositoryState, action: ActionRedux) => {
    switch (action.type) {
        case SET_REPOSITORIES:
            return {
                ...state,
                all: action.payload,
                current: action.payload.length && !state.current
                    ? action.payload[0]
                    : state.current,
            };
        case SET_CURRENT_REPOSITORY:
            return {
                ...state,
                current: action.payload,
            };
        default:
            return state;
    }
};

const initialDirectoryState: DirectoryState = {
    path: '',
    content: [],
};

const directory = (state = initialDirectoryState, action: ActionRedux) => {
    switch (action.type) {
        case SET_DIRECTORY_CONTENT:
            return {
                ...state,
                content: action.payload,
            };
        case SET_DIRECTORY_PATH:
            return {
                ...state,
                path: action.payload,
            };
        default:
            return state;
    }
};

const initialBranchState = {
    current: 'master',
    list: [],
};

const initialFileState: FileState = {
    name: '',
    path: '',
    content: null,
    lastUpdate: null,
};

const file = (state = initialFileState, action: ActionRedux) => {
    switch (action.type) {
        case SET_FILE_DATA: {
            const pathArr: string[] = action.payload.path.split('/').filter((i: string) => i);

            return {
                ...state,
                name: pathArr[pathArr.length - 1],
                path: action.payload.path,
                content: action.payload.content,
                lastUpdate: Date.now(),
            };
        }
        case CLEAR_FILE_DATA:
            return initialFileState;
        default:
            return state;
    }
};


export default combineReducers({
    repositories,
    directory,
    file,
});
