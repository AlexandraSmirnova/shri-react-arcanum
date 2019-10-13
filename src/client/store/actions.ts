import { 
    SET_DIRECTORY_CONTENT, SET_DIRECTORY_PATH, SET_REPOSITORIES, SET_CURRENT_REPOSITORY,
    SET_FILE_DATA, CLEAR_FILE_DATA
} from "./actionTypes";
import { ContentDirectoryData, FileContent } from "../types";


export const setRepositories = (repos: string[]) => ({
    type: SET_REPOSITORIES,
    payload: repos,
})

export const setCurrentRepository = (repo: string) => ({
    type: SET_CURRENT_REPOSITORY,
    payload: repo,
})

export const setDirectoryContent = (content: ContentDirectoryData[]) => ({
    type: SET_DIRECTORY_CONTENT,
    payload: content,
})

export const setDirectoryPath = (path: string) => ({
    type: SET_DIRECTORY_PATH,
    payload: path,
})

export const setFileData = (data: FileContent) => ({
    type: SET_FILE_DATA,
    payload: data,
})

export const clearFileData = () => ({ type: CLEAR_FILE_DATA })