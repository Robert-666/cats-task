import { NavLink } from "react-router-dom";
import "./index.scss";

export const HeaderItem = ({ item }) => {
  return (
    <NavLink className="header__item" to={`/${item.name}`}>
      {item.name}
    </NavLink>
  );
};
