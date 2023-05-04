import {axiosServiceCars} from "./axios.service";
import {urls} from "../constants";

const carsService = {
    getAll: () => axiosServiceCars.get(urls.cars.cars),
    getById: (id) => axiosServiceCars.get(urls.cars.byId(id)),
    create: (car) => axiosServiceCars.post(urls.cars.cars, car),
    updateById: (id, car) => axiosServiceCars.put(urls.cars.byId(id), car),
    deleteById: (id) => axiosServiceCars.delete(urls.cars.byId(id))
}

export {carsService};