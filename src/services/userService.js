import axios from '../axios';
const handleLogin = (email, password) => {
    const params = new URLSearchParams({ email, password });
    return axios.post('/login', params);
};

export default handleLogin;
