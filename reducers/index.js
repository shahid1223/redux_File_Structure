import { combineReducers } from "redux";
import { productreducer } from "./ProductReducer";

const rootreducer = combineReducers({
    allProducts : productreducer,
})

export default rootreducer;