import axios from "axios";

const API_URL = 'http://127.0.0.1:3000/api/repos/';

const api = (url) => 
    axios.get(url)
        .then((res) => res.data)

export const fetchRepos = () => 
    api(API_URL);

export const fetchTree = (repoId, branch, path) => {
    let url = `${API_URL}/${repoId}`;

    if (path && branch) {
        url = `${url}/tree/${branch}/${path}`;
    }

    return api(url);
}

export const fetchFileContent = (repoId, path, branch='master') => 
    api(`${API_URL}/${repoId}/blob/${branch}/${path}`);

  