import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer/reducer";
import { CatsReducer } from "./catsReducer/reducer";

export const rootReducer = combineReducers({
  category: categoryReducer,
  cats: CatsReducer,
});
