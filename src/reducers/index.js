import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer/reducer";
import { hatCatsReducer } from "./hatCatsReducer/reducer";

export const rootReducer = combineReducers({
  category: categoryReducer,
  hats: hatCatsReducer,
});
