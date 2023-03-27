import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getHatCatsData } from "../../reducers/hatCatsReducer/actions";
import { ImageBox } from "./ImageBox";
import "./index.scss";

export const Main = () => {
  const { category } = useParams();
  const hatCats = useSelector((state) =>
    state[category] ? state[category].data : []
  );
  const error = useSelector((state) => state.category.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHatCatsData());
  }, []);

  if (error !== null) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="main">
      {hatCats.length !== 0 ? (
        hatCats.map((item) => (
          // <img src={item.url} />
          <ImageBox item={item} key={item.id} />
        ))
      ) : (
        <h1>Sorry there is no available images try another one </h1>
      )}
    </div>
  );
};
