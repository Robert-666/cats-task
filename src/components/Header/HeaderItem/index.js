import { NavLink } from "react-router-dom";
import "./index.scss";

export const HeaderItem = ({ item }) => {
  return (
    <NavLink className="header__item" to={`/${item.id}`}>
      {item.name}
    </NavLink>
  );
};
