import axios from 'axios';

export const apiServidor = axios.create({
    baseURL: "http://localhost:3333"
});

export const apiPosts = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});
