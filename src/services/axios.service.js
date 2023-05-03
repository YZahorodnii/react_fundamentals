import {baseURL} from "../constants";
import axios from "axios";

const axiosService = axios.create({baseURL: baseURL});

export {axiosService};