const baseURL = 'https://jsonplaceholder.typicode.com/'

const users = '/users'
const posts = '/posts'
const comments = '/comments'
const todos = '/todos'

const urls = {
    users: {
        users: users,
        byId: (id: number): string => `${users}/${id}`
    }
}

export {
    baseURL,
    urls
}