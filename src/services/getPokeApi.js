import axios from 'axios';

export const getPokeApi = async (limit) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
    const response = await axios.get(url);
    return response

}
getPokeApi()