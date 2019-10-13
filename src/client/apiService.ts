import axios from "axios";
import { ApiReposReponse, ContentDirectoryData, FileContent } from "./types";

const API_URL = 'http://127.0.0.1:3000/api/repos/';

const api = (url: string) => axios.get(url).then((res) => res.data)

export const fetchRepos = (): Promise<ApiReposReponse> => api(API_URL);

export const fetchTree = (
    repoId: string,
    branch: string,
    path: string
): Promise<ContentDirectoryData> => {
    let url = `${API_URL}${repoId}`;

    if (path && branch) {
        url = `${url}/tree/${branch}/${path}`;
    }

    return api(url);
}

export const fetchFileContent = (
    repoId: string,
    path: string,
    branch: string ='master'
): Promise<FileContent> => api(`${API_URL}${repoId}/blob/${branch}/${path}`);

  