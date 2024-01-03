import "./style.css";

import logo from "../../assets/logo-event2.png";

const Banner = () => {
  return (
    <section id="banner-wrapper">
      <div className="container qwerty">
        <img src={logo} alt="" />
        <button className="text">TENTANG ACARA</button>
      </div>
    </section>
  );
};

export default Banner;
