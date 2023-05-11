import {IAuth, IUser} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IRes} from "../types";

class AuthService{
    register(user: IAuth): IRes<IUser> {
        return axiosService.post(urls.auth.register)
    }
}

export const authService = new AuthService()