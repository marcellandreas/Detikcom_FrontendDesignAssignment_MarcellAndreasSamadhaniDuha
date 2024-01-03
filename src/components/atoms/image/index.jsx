import "./style.css";

export const CustomImage = ({ src, alt }) => {
  return <img src={src} alt={alt} className="children-image" />;
};
