import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCategoryData } from "../../reducers/categoryReducer/actions";
import { HeaderItem } from "./HeaderItem";
import "./index.scss";

export const Header = () => {
  const category = useSelector((state) => state.category.data);
  const error = useSelector((state) => state.category.error);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("aaa");
    dispatch(handleCategoryData());
  }, []);

  if (error !== null) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="navbar">
      {category.map((item, index) => (
        <HeaderItem item={item} key={index} />
      ))}
    </div>
  );
};
