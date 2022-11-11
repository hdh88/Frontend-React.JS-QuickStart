import axios from '../axios';
const handleLoginApi = (email, password) => {
    return axios.post('/login', { email, password });
};

const getAllUsers = (id) => {
    return axios.post('/get-all-users', { id });
};

const createNewUserService = (data) => {
    return axios.post('/create-new-user', data);
};

const deleteUserService = (userId) => {
    // return axios.delete('/delete-user', { id: userId });
    return axios.delete('/delete-user', {
        data: { id: userId },
    });
};

const editUserService = (inputData) => {
    // return axios.delete('/delete-user', { id: userId });
    return axios.put('/edit-user', inputData);
};

export default handleLoginApi;
export { getAllUsers, createNewUserService, deleteUserService, editUserService };
