const baseURL = 'http://jsonplaceholder.typicode.com';
const carsAPI = 'http://owu.linkpc.net/carsAPI/v1'

const cars = '/cars';
const urls = {
    users: 'users',
    comments: '/comments',
    cars: {
        cars: cars,
        byId: (id) => `${cars}/${id}`
    }
}

export {baseURL, urls, carsAPI};