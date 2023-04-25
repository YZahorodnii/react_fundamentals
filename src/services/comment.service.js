import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";
import axios from "axios";

const commentService = {
    getAll: () => axiosService.get(urls.comments),
    getById: (id) => axiosService.get(`${urls.comments}/${id}`),
    create: (comment) => axiosService.post(urls.comments, comment),
    updateById: (id, comment) => axiosService.put(`${urls.comments}/${id}`, comment),
    deleteById: (id) => axiosService.delete(`${urls.comments}/${id}`)
}

export {
    commentService
}