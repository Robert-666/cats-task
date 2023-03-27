import axios from "axios";
import { actionTypes } from "./costants";

export const handleCategoryData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/categories"
      );
      const categoryData = response.data;
      dispatch({
        type: actionTypes.GET_CATEGORY_DATA,
        payload: {
          data: categoryData,
        },
      });
    } catch (err) {
      dispatch({
        type: actionTypes.HANDLE_CATEGORY_ERROR,
        payload: {
          data: err.message,
        },
      });
    }
  };
};
