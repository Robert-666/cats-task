import axios from "axios";
import { actionTypes } from "./costants";

export const getHatCatsData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1"
      );
      const hatCats = response.data;

      dispatch({
        type: actionTypes.GET_HAT_CATS_DATA,
        payload: {
          data: hatCats,
        },
      });
    } catch (err) {
      dispatch({
        type: actionTypes.HANDLE_HAT_CATS_ERROR,
        payload: {
          error: err.message,
        },
      });
    }
  };
};
