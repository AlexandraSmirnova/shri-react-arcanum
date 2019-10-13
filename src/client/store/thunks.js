import { fetchRepos, fetchTree, fetchFileContent } from "../apiService";
import {
    setRepositories, setDirectoryContent, setDirectoryPath, setCurrentRepository,
    setFileData, clearFileData
} from "./actions";


export const setRepositoriesThunk = () => (dispatch) => 
    fetchRepos()
        .then((res) => dispatch(setRepositories(res)))
        .then()
        .catch(() => []);

export const setDirectoryContentThunk = (path) => (dispatch, getState) => {
    const state = getState();

    if (!state.repositories.current) {
        return;
    }

    fetchTree(state.repositories.current, state.branches.current, path) 
        .then((res) => {
            dispatch(setDirectoryPath(path))
            dispatch(setDirectoryContent(res))
        })
        .catch(() => []);
}

export const setCurrentRepositoryThunk = (repo) => (dispatch) => {
    fetchTree(repo) 
        .then((res) => {
            dispatch(setCurrentRepository(repo))
            dispatch(setDirectoryContent(res))
        })
        .catch(() => []);
}


export const setFileContentThunk = (filePath) => (dispatch, getState) => {
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
export const initThunk = () => (dispatch) => {
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