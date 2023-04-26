import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const postsService = {
    getAll: () => axiosService.get(urls.posts.posts)
}

export {
    postsService
}