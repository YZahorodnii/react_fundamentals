import {axiosService} from "./axios.service";
import {urls} from "../constants";

const locationsService = {
    getAll: axiosService.get(urls.locations.locations),
    getById: (id) => axiosService.get(urls.locations.byId(id))
}

export {locationsService}