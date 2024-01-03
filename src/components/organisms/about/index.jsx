import "./style.css";
import img from "../../../assets/map-1.png";
import { Card } from "../../molecules/Card";
import { Button } from "../../atoms/button";

const About = () => {
  const handleButtonClick = () => {
    window.open("https://event.detik.com/", "_blank");
  };
  return (
    <section id="about-wrapper">
      <div className="about">
        <div className="about-top">
          <div>
            <Card
              type="menu"
              src={img}
              alt="Menu"
              title="Judul Menu"
              paragraf="Dimulai pukul 6 pagi, nikmati pemandangan kota di pagi hari dimulai dari Bundaran HI hingga Patung Pemuda Membangun di Senayan lalu kembali lagi ke Bundaran HI!"
            />
          </div>
          <div className="card-right">
            <Card
              type="noimg"
              title="GRATIS DAN BERHADIAH"
              paragraf="Pendaftaran gratis! Ajak keluarga anda dan menangkan hadiah total puluhan juta rupiah doorprize menarik!"
            />
            <Card
              type="noimg"
              title="50+ TENANT BAZZAR "
              paragraf="Dapatkan promo menarik pada booth-booth tenant bazzar Sudirman Run 2023 mulai dari F&B hingga fashion"
            />
            <Card
              type="side"
              src={img}
              alt="Side"
              title="SPECIAL PERFORMANCE"
              paragraf="Saksikan penampilan dari RAN, Ayu Ting Ting, Diskoria, serta hiburan lainnya!"
            />
          </div>
        </div>
        <Button onClick={handleButtonClick}>DAFTAR SEKARANG</Button>
      </div>
    </section>
  );
};

export default About;
