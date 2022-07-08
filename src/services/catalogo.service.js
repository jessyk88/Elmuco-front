const http = require('./wrapper');

export const getCatalogoService = () => {
    return http.get(`${http.HOST}/productos`);
}

export const addCatalogoService = (catalogo) => {
    return http.post(`${http.HOST}/productos`,catalogo);
}

export const deleteCatalogoService = (id) => {
    return http.del(`${http.HOST}/productos/${id}`);
}