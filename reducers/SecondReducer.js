import { ActionType } from "../constant/ActionTypes";

const initialState = {
    products: [],
    selectedProduct: [],
    addition : []
}

export const secondreducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.SET_PRODUCT:
            return { ...state, products: payload }

        case ActionType.FETCH_PRODUCTS:
            return { ...state, products: payload }

        case ActionType.FETCH_SELECTED_PRODUCTS:
            return { ...state, selectedProduct: payload }

        case ActionType.ADD_TWO_NUMBER:
            return { ...state, addition: payload }

        default:
            return state
    }
}