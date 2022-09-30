import axios from 'axios';
// exact url is in the package.json file
const baseUrl = 'https://jsonplaceholder.typicode.com/users';

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

const getUser = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
};

const usersService = { getAll, getUser };
export default usersService;
