import axios from '../axios';
const handleLogin = (email, password) => {
    const params = new URLSearchParams({ email, password });
    return axios.post('/login', params);
};

const getAllUsers = (id) => {
    const params = new URLSearchParams({ id });
    return axios.post('/get-all-users', params);
};
export default handleLogin;
export { getAllUsers };
