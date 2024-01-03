import "./style.css";
export const Button = ({ children, onClick }) => {
  return (
    <button className="button-custom" onClick={onClick}>
      {children}
    </button>
  );
};
