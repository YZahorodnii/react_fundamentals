import {axiosService} from "./axios.service";
import {urls} from "../constants";

const charactersService = {
    getAll: (page=1) => axiosService.get(urls.characters.characters, {params: {page: page}}),
    getById: (id) => axiosService.get(urls.characters.byId(id))
}

export {charactersService}