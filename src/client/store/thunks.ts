import { fetchRepos, fetchTree, fetchFileContent } from "../apiService";
import {
    setRepositories, setDirectoryContent, setDirectoryPath, setCurrentRepository,
    setFileData, clearFileData, init, initFailure
} from "./actions";
import { Dispatch, AnyAction, Action } from "redux";
import { State } from "./types";
import { ThunkAction, ThunkDispatch } from "redux-thunk";


type MyThunkResult<R> = ThunkAction<R, State, void, Action>;

export const setRepositoriesThunk = (): MyThunkResult<void> => 
    (dispatch: Dispatch) => 
        fetchRepos()
            .then((res) => dispatch(setRepositories(res)))
            .then()
            .catch(() => []);

export const setDirectoryContentThunk = (path: string): MyThunkResult<void> => 
    (dispatch: Dispatch, getState: () => State) => {
        const state = getState();

        if (!state.repositories.current) {
            return;
        }

        fetchTree(state.repositories.current, 'master', path) 
            .then((res) => {
                dispatch(setDirectoryPath(path))
                dispatch(setDirectoryContent(res))
            })
            .catch(() => []);
    }

export const setCurrentRepositoryThunk = (repo: string): MyThunkResult<void> => 
    (dispatch: Dispatch) => {
        fetchTree(repo) 
            .then((res) => {
                dispatch(setCurrentRepository(repo))
                dispatch(setDirectoryContent(res))
            })
            .catch(() => []);
    }


export const setFileContentThunk = (filePath: string): MyThunkResult<void> => 
    (dispatch: Dispatch, getState: () => State) => {
        const state = getState();

        if (!state.repositories.current) {
            return;
        }

        fetchFileContent(state.repositories.current, filePath)
            .then((res) => {
                dispatch(setFileData({ path: filePath, content: JSON.parse(res) }))
                dispatch(setDirectoryPath(filePath))
            })
            .catch((e) => dispatch(clearFileData()));
    }


/** Middleware, для похода за всеми начальными данными */
export const initThunk = (): MyThunkResult<void> => 
    (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        fetchRepos()
            .then((res) => { 
                if (res && res.length > 0) {
                    dispatch(setRepositories(res));

                    fetchTree(res[0]) 
                        .then((res) => {
                            dispatch(setDirectoryContent(res))
                        })
                }
            })
            .then(() => dispatch(init()))
            .catch(() => dispatch(initFailure()));
    }