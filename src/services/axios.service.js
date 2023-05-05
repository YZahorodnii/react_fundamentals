import {baseURl} from "../constants";
import axios from "axios";

const axiosService = axios.create({baseURL: baseURl});

export {axiosService}