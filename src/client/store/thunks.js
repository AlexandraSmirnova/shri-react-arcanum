import { fetchRepos, fetchTree } from "../apiService";
import { setRepositories, setDirectoryContent, setDirectoryPath } from "./actions";



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

    fetchTree(state.repositories.current, path) 
        .then((res) => {
            dispatch(setDirectoryPath(path))
            dispatch(setDirectoryContent(res))
        })
        .catch(() => []);
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