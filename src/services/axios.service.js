import axios from "axios";
import {baseUrl} from "../urls/urls";

const axiosService = axios.create({baseURL: baseUrl})

export {
    axiosService
}