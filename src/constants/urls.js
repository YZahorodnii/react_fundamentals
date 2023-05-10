const baseURL = 'https://rickandmortyapi.com/api'

const locations = '/location'
const characters = '/character'

const urls = {
    characters: {
        characters,
        byId: (id) => `${characters}/${id}`
    },
    locations: {
        locations,
        byId: (id) => `${locations}/${id}`
    }
}

export {urls, baseURL}