import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const commentsService = {
    getAll: () => axiosService.get(urls.comments.comments)
}

export {
    commentsService
}