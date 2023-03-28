import { actionTypes } from "./costants";

const initialState = {
  data: [],
  error: null,
};

export const CatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATS_DATA:
      return {
        ...state,
        data: action.payload.data,
      };
    case actionTypes.HANDLE_CATS_ERROR:
      return {
        ...state,
        error: action.payload.data,
      };

    default:
      return state;
  }
};
