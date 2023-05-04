import {axiosService, IRes} from './axios.service';
import {urls} from "../constants";
import {ICar} from "../interfaces";

export const carsService = {
    getAll: (): IRes<ICar []> => axiosService.get(urls.cars.cars),
    create: (car: ICar): IRes<ICar> => axiosService.post(urls.cars.cars),
    updateById: (id: number, car: ICar): IRes<ICar> => axiosService.put(urls.cars.byId(id)),
    delete: (id: number): IRes<void> => axiosService.delete(urls.cars.byId(id))
}