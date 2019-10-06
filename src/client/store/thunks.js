import { fetchRepos } from "../apiService";
import { setRepositories } from "./actions";

export const setRepositoriesThunk = () => (dispatch) => 
    fetchRepos()
        .then((res) => dispatch(setRepositories(res)))
        .catch(() => []);