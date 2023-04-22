import axios from "axios";
import {baseUrl, commentsUrl} from "../configs/urls";

const axiosService = axios.create({baseUrl});
const axiosServiceComments = axios.create({commentsUrl});

export {
    axiosService,
    axiosServiceComments
}
