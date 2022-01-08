import { actionTypes } from "../actiontypes/actionTypes";

const initialState = {
  products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCT:
      return { ...state, products: payload };

    case actionTypes.FETCH_PRODUCT:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECT_PRODUCT:
      return { ...state, ...payload };

    default:
      return state;
  }
};
