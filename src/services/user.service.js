import {axiosService} from "./axios.service";
import {baseUrl} from "../configs/urls";
import user from "../components/User/User";

const userService = {
    getAll: ()=> axiosService.get(baseUrl),
    getById: (id)=>  axiosService.get(baseUrl + `/${id}`),
    create: (user)=>  axiosService.post(baseUrl, user),
    updateById: (id, user)=>  axiosService.put(baseUrl + `/${id}`, user),
    deleteById: (id)=>  axiosService.delete(baseUrl + `/${id}`)
}

export {
    userService
}