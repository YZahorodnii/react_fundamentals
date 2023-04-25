import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";
import album from "../Components/Album/Album";
import axios from "axios";

const albumService = {
    getAll: () => axiosService.get(urls.albums),
    getById: (id) => axiosService.get(`${urls.albums}/${id}`),
    create: (album) => axiosService.post(urls.albums, album),
    updateById: (id, album) => axiosService.put(`${urls.albums}/${id}`, album),
    deleteById: (id) => axiosService.delete(`${urls.albums}/${id}`)
}

export {
    albumService
}