import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

const todoService = {
    getAll: () => axiosService.get(urls.todos),
    getAllById: (id) => axiosService.get(`${urls.todos}/${id}`),
    create: (todo) => axiosService.post(urls.todos, todo),
    updateById: (id, todo) => axiosService.put(`${urls.todos}/${id}`, todo),
    deleteById: (id) => axiosService.delete(`${urls.todos}/${id}`)
}