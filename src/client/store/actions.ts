import { 
    SET_DIRECTORY_CONTENT, SET_DIRECTORY_PATH, SET_REPOSITORIES, SET_CURRENT_REPOSITORY,
    SET_FILE_DATA, CLEAR_FILE_DATA
} from "./actionTypes";
import { ContentDirectoryData, FileContent } from "../types";
import { action } from 'typesafe-actions';


export const setRepositories = (repos: string[]) => action(SET_REPOSITORIES, repos);

export const setCurrentRepository = (repo: string) => action(SET_CURRENT_REPOSITORY, repo);

export const setDirectoryContent = (content: ContentDirectoryData[]) => action(SET_DIRECTORY_CONTENT, content);

export const setDirectoryPath = (path: string) => action(SET_DIRECTORY_PATH, path);

export const setFileData = (data: { path: string, content: FileContent}) => action(SET_FILE_DATA, data);

export const clearFileData = () => action(CLEAR_FILE_DATA);