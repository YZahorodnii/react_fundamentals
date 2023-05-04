import {baseURL} from "../constants";
import axios, {AxiosResponse} from "axios";

export type IRes<T> = Promise<AxiosResponse<T>>

const axiosService = axios.create({baseURL})

export {axiosService}