import { useCallback, useEffect, useState } from "react";
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
  const [imageCount, setImageCount] = useState(3);
  const dispatch = useDispatch();

  const handleShowMore = useCallback(() => {
    setImageCount((prevVal) => prevVal + 3);
  }, []);

  const handleShowLess = useCallback(() => {
    setImageCount((prevVal) => prevVal - 3);
  }, []);

  useEffect(() => {
    dispatch(getHatCatsData());
  }, []);

  if (error !== null) {
    return <h1>{error}</h1>;
  }

  if (hatCats.length === 0) {
    return <h1>Sorry try another category</h1>;
  }

  return (
    <>
      <div className="main">
        {hatCats.slice(0, imageCount).map((item) => (
          <ImageBox item={item} key={item.id} />
        ))}
      </div>
      {imageCount < 10 && (
        <button
          className="main__show_more_btn"
          onClick={() => {
            handleShowMore();
          }}
        >
          Show More
        </button>
      )}
      {imageCount > 3 && (
        <button
          className="main__show_less_btn"
          onClick={() => handleShowLess()}
        >
          Show Less
        </button>
      )}
    </>
  );
};
