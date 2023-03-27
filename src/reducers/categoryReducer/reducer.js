import { actionTypes } from "./costants";

export const initialState = {
  data: [],
  error: null,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORY_DATA:
      return {
        ...state,
        data: action.payload.data,
      };
    case actionTypes.HANDLE_CATEGORY_ERROR:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};
