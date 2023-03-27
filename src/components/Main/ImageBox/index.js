import "./index.scss";
export const ImageBox = ({ item }) => {
  return (
    <div className="main__image-box">
      <img className="main__image-box__image" src={item.url} />
    </div>
  );
};
