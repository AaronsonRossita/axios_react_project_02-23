import { axiosInstance } from "./axiosInstance"

export const getPokemonByName = (pokemon) => {
    return axiosInstance.get(`/pokemon/${pokemon}`);
}