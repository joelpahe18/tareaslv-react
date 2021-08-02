import axios from 'axios';

const API_URL = 'http://185.70.197.172/api/api';

const MatrixServicios = {
    login: ( infoUsuario ) => {
        return axios.post(`${ API_URL }/auth/login`, { ...infoUsuario })
    },
    register: ( usuario ) => {
        // const config = {
        //     headers: { Authorization: `Bearer ${token}` }
        // };

        return axios.post(`${ API_URL }/auth/signup`, { ...usuario })
    },
}

export default MatrixServicios;