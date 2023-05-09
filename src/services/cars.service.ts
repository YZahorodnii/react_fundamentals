import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {ICar} from "../interfaces";
import {IRes} from "../types";

const carsService = {
    getAll: (): IRes<ICar[]> => axiosService.get(urls.cars.cars),
    create: (car: ICar):IRes<ICar> => axiosService.post(urls.cars.cars, car),
    updateById: (id: number, car: ICar): IRes<ICar> => axiosService.put(urls.cars.byId(id), car),
    deleteById: (id: number): IRes<ICar> => axiosService.delete(urls.cars.byId(id))
}

export {carsService}