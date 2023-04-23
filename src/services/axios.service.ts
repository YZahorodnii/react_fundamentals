import axios, {AxiosResponse} from "axios";
import {baseUrl} from "../configs/urls";

type IRes<T> = Promise<AxiosResponse<T>>
//@ts-ignore
const axiosService = axios.create({baseUrl});

export {
    axiosService
}

export type {
    IRes
}