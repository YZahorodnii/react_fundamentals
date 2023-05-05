import axios from "axios";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carsService = {
    getAll: axiosService.get(urls.cars.cars),
    updateById: (id, car) => axiosService.put(urls.cars.byId(id), car),
    create: (car) => axiosService.post(urls.cars.cars, car),
    deleteById: (id) => axiosService.delete(urls.cars.byId(id))

}

export {carsService}