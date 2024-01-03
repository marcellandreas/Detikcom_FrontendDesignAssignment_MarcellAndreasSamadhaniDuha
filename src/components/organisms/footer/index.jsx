import "./style.css";

import facebook from "../../../assets/img-sosial/facebook.png";
import linkedin from "../../../assets/img-sosial/linkedin.png";
import twiter from "../../../assets/img-sosial/x.png";
import youtube from "../../../assets/img-sosial/youtube.png";
import instagram from "../../../assets/img-sosial/instagram.png";
import logo from "../../../assets/logo-event2-white.png";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={logo} alt="logo-footer" />
      </div>
      <div className="content">
        <p>
          Event olahraga lari sejauh 10 kilometer yang diselenggarakan oleh
          Detikhealth secara gratis untuk masyarakat Indonesia. Ajak keluarga
          dan kerabat anda untuk ikut keseruan Sudirman Run 2023 lalu menangkan
          hadiah utama serta doorprize dengan total puluhan juta rupiah
        </p>
        <div className="sosial-media">
          <p>Connect With Us</p>
          <div className="logo-media">
            <img src={facebook} alt="" />
            <img src={twiter} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>
      </div>

      <hr style={{ borderColor: "white" }} />
      <p style={{ alignSelf: "stretch" }}>
        Copyright @ 2023 detikcom. All right reserved
      </p>
    </footer>
  );
};

export default Footer;
