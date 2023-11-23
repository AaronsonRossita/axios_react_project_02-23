import axios from "axios";

const url = new URL("https://pokeapi.co/api/v2");

export const axiosConfig = {
    baseURL: url.toString()
};

axios.defaults.withCredentials = false;

export const axiosInstance = axios.create(axiosConfig);

