import axios from "axios";
import {axiosService, IRes} from "./axios.service";
import {urls} from "../configs/urls";
import {ICar} from "../interfaces/car.interface";

const carService = {
    getAll: (): IRes<ICar[]> => axiosService.get(urls.cars),
    create: (car: ICar): IRes<ICar> => axiosService.post(urls.cars, car),
    updateById: (car: ICar, id: number):IRes<ICar> => axiosService.put(`${urls.cars}/${id}`, car),
    delete: (id:number):IRes<void> => axiosService.delete(`${urls.cars}/${id}`)
}

export {

    carService
}