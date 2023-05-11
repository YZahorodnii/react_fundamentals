import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {ICar} from "../interfaces";
import {IRes} from "../types";

class CarsService {
    getAll(): IRes<ICar[]> {
        return axiosService.get(urls.cars.cars)
    }

    create(car: ICar): IRes<ICar> {
        return axiosService.post(urls.cars.cars, car)
    }

    updateById(id: number, car: ICar): IRes<ICar> {
        return axiosService.put(urls.cars.byId(id), car)
    }

    deleteById(id: number): IRes<ICar> {
        return axiosService.delete(urls.cars.byId(id))
    }
}

export const carsService = new CarsService();