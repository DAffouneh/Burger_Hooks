import axios from 'axios';
const instance = axios.create({
    baseURL:'https://react-my-burger-bfc61.firebaseio.com/' });

export default instance;