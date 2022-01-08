import axios from "axios";
import { actionTypes } from "../actiontypes/actionTypes";
import API from "../../apis/API";

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCT,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionTypes.SELECT_PRODUCT,
    payload: product,
  };
};

export const fetchProducts = () => {
  return async function(dispatch, getstate) {
    const response = await API.get("/products");
    dispatch({
      type: actionTypes.FETCH_PRODUCT,
      payload: response.data,
    });
  };
};

export const fetchProduct = (id) => {
    return async function(dispatch, getstate) {
      const response = await API.get(`/products/${id}`);
      dispatch({
        type: actionTypes.SELECT_PRODUCT,
        payload: response.data,
      });
    };
  };
