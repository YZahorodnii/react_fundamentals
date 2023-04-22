import {axiosServiceComments} from "./axios.service";
import {commentsUrl} from "../configs/urls";

const commentService = {
    getAll: () => axiosServiceComments.get(commentsUrl),
    getById: (id) => axiosServiceComments.get(commentsUrl + `/${id}`),
    create: (comment) => axiosServiceComments.post(commentsUrl, comment),
    deleteById: (id) => axiosServiceComments.delete(commentsUrl),
    updateById: (id, comment) => axiosServiceComments.put(`${commentsUrl}/${id}`, comment)
}

export {
    commentService
}