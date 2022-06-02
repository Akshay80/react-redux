import { combineReducers } from "redux";
import { productReducer, selectedproductReducer } from "./productReducer";

export const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedproductReducer
});