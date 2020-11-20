export const ADD_CLIENT = 'ADD_CLIENT';
export const REMOVE_CLIENT = 'REMOVE_CLIENT';
export const UPDATE_CLIENT = "UPDATE_CLIENT"

export const addClient = (form) => {
    return {
        type: ADD_CLIENT,
        payload: form
    };
};

export const removeClient = (id) => {
    return {
        type: REMOVE_CLIENT,
        payload: id
    };
};

export const updateClient = (id, form) => {
    return {
        type: UPDATE_CLIENT,
        payload: [id,form]
    };
};