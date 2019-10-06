import { SET_DIRECTORY_CONTENT, SET_DIRECTORY_PATH, SET_REPOSITORIES, SET_CURRENT_REPOSITORY } from "./actionTypes";


export const setRepositories = (repos) => ({
    type: SET_REPOSITORIES,
    payload: repos,
})

export const setCurrentRepository = (repo) => ({
    type: SET_CURRENT_REPOSITORY,
    payload: repo,
})

export const setDirectoryContent = (content) => ({
    type: SET_DIRECTORY_CONTENT,
    payload: content,
})

export const setDirectoryPath = (path) => ({
    type: SET_DIRECTORY_PATH,
    payload: path,
})