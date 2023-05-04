import {baseURL, carsAPI} from "../constants";
import axios from "axios";

const axiosService = axios.create({baseURL: baseURL});
const axiosServiceCars = axios.create({baseURL: carsAPI})

export {axiosService, axiosServiceCars};