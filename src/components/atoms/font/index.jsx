import "./style.css";
export const FontTitle = ({ children }) => {
  return <h2 className="children-h2">{children}</h2>;
};

export const FontParagraf = ({ children }) => {
  return <h2 className="children-p">{children}</h2>;
};

export const FontTitleContent = ({ children }) => {
  return <h1 className="children-title-content">{children}</h1>;
};

export const FontMenuTabbar = ({ children, active }) => {
  return (
    <div className={`single-tabbar ${active === true ? "active" : ""}`}>
      <p>{children}</p>
    </div>
  );
};
