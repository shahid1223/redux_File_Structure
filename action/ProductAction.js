import { ActionType } from "../constant/ActionTypes";
import fakeStoreApi from "../apis/fakeStoreApi";

export const fetchproducts = () => {
    return async function (dispatch , getstate) {
        const response = await fakeStoreApi.get("/products");
        dispatch({type : ActionType.FETCH_PRODUCTS , payload:response.data})
    }
}

export const fetchselectedproducts = () => {
    return async function (dispatch , getstate) {
        const response = await fakeStoreApi.get("/products/2");
        dispatch({type : ActionType.FETCH_SELECTED_PRODUCTS , payload:response.data})
    }

}
export const addtwonumber = (a , b) => {
    const result = a + b;
    return {
        type : ActionType.ADD_TWO_NUMBER,
        payload : result
    }
}

export const setproducts = (products) => {
    return {
        type : ActionType.SET_PRODUCT,
        payload : products
    }
}

export const selectedproduct = (product) => {
    return {
        type : ActionType.SELECTED_PRODUCT,
        payload : product
    }
}