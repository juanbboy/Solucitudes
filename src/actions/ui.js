import { types } from "../types/types";

export const uiOpenModal = () => ({ type: types.uiOpenModal });
export const uiCloseModal = () => ({ type: types.uiCloseModal });


export const setError = (err) => {
    return {
        type: types.uiSetError,
        payload: err
    }
};

export const removeError = () => (
    {
        type: types.uiRemoveError,
        payload: null
    });

export const startLoading = () => {
    return {
        type: types.uiStartLoading,
    }
}

export const finishLoading = () => {
    return {
        type: types.uiFinishLoading,
    }
}