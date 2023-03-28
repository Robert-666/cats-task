import axios from "axios";
import { actionTypes } from "./costants";

export const getCatsData = (category) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${category}`
      );
      const hatCats = response.data;

      dispatch({
        type: actionTypes.GET_CATS_DATA,
        payload: {
          data: hatCats,
        },
      });
    } catch (err) {
      dispatch({
        type: actionTypes.HANDLE_CATS_ERROR,
        payload: {
          error: err.message,
        },
      });
    }
  };
};

export const getNonSelectedCatsData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      const hatCats = response.data;

      dispatch({
        type: actionTypes.GET_CATS_DATA,
        payload: {
          data: hatCats,
        },
      });
    } catch (err) {
      dispatch({
        type: actionTypes.HANDLE_CATS_ERROR,
        payload: {
          error: err.message,
        },
      });
    }
  };
};
