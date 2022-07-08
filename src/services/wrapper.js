import axios from 'axios';

export const HOST = 'http://localhost:8081' 

const wrapper = (method, url, body) => {
    return axios({
        method: method,
        url: url,
        data: body
    })
};


export const get = (url) => {
    return wrapper('get', url);
};

export const post = (url, body) => {
    return wrapper('post', url, body);
};

export const del = (url) => {
    return wrapper('delete', url);
};