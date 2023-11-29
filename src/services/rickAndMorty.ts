import axios from 'axios';

export const rickAndMortyCharacter = 'http://localhost:8081/juegos';
export const rickAndMortyLocalizations = 'https://rickandmortyapi.com/api/location';
export const rickAndMortyEpisodes = 'http://127.0.0.1:4200/episodes';

export const fetchRickAndMorty = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
};

export const createRickAndMortFetch = async (url: string, { arg }: any) => {
    const response = await axios.post(url, arg);
    return response.data;
};

export const updateRickAndMortyFetch = async (url: string, { arg }: any) => {
    const response = await axios.patch(url, arg);
    return response.data;
};