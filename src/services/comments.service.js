import {axiosService} from "./axios.service";
import {urls} from "../constants";

const commentsService = {
    getAll: () => axiosService.get(urls.comments),
    create: (comment) => axiosService.post(urls.comments, comment)
}

export {commentsService};