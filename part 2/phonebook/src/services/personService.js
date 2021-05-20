import axios from 'axios'

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const create = newPerson => {
    const request = axios.post(baseUrl, newPerson);
    return request.then(response => response.data);
}

const update = (updatedPerson, id) => {
    const request = axios.put(`${baseUrl}/${id}`, updatedPerson);
    return request.then(response => response.data);
}

const remove = personToRemove => {
    const request = axios.delete(`${baseUrl}/${personToRemove.id}`);
    return request.then(response => response.data);
}

export default { getAll, create, update, remove };