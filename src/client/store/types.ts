import { Action, Store as ReduxStore } from 'redux';
import AppState from './reducers';
import { FileContent, ContentDirectoryData } from '../types';
import { ActionType } from 'typesafe-actions';
import * as actions  from './actions';
import { ThunkDispatch } from 'redux-thunk';



export type Store = ReduxStore<typeof AppState, Action>;

export interface RepositoryState {
    all: string[];
    current: string;
}

export interface DirectoryState {
    path: string;
    content: ContentDirectoryData[];
};

export interface FileState {
    name: string;
    path: string;
    content: FileContent | null,
    lastUpdate: number | null,
};

export interface State {
    repositories: RepositoryState,
    directory: DirectoryState,
    file: FileState
}

export type ActionRedux = ActionType<typeof actions>;

export type ThunkDispatchWrap = ThunkDispatch<State, void, Action>;