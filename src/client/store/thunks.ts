import { fetchRepos, fetchTree, fetchFileContent } from "../apiService";
import {
    setRepositories, setDirectoryContent, setDirectoryPath, setCurrentRepository,
    setFileData, clearFileData
} from "./actions";
import { Dispatch } from "redux";
import { State } from "./types";


export const setRepositoriesThunk = () => (dispatch: Dispatch) => 
    fetchRepos()
        .then((res) => dispatch(setRepositories(res)))
        .then()
        .catch(() => []);

export const setDirectoryContentThunk = (path: string) => (dispatch: Dispatch, getState: () => State) => {
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

export const setCurrentRepositoryThunk = (repo: string) => (dispatch: Dispatch) => {
    fetchTree(repo) 
        .then((res) => {
            dispatch(setCurrentRepository(repo))
            dispatch(setDirectoryContent(res))
        })
        .catch(() => []);
}


export const setFileContentThunk = (filePath: string) => (dispatch: Dispatch, getState: () => State) => {
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
export const initThunk = () => (dispatch: Dispatch) => {
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
        .catch(() => []);
}