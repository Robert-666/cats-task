import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer/reducer";
import { CatsReducer } from "./hatCatsReducer/reducer";

export const rootReducer = combineReducers({
  category: categoryReducer,
  cats: CatsReducer,
});
