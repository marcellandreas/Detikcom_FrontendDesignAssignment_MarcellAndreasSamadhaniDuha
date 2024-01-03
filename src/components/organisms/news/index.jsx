import { CardArticle } from "../../molecules/Card";
import "./style.css";
import imgArticle from "../../../assets/img-article/article-1.png";
import imgArticle2 from "../../../assets/img-article/article-2.png";
import imgArticle3 from "../../../assets/img-article/article-3.png";
import imgArticle4 from "../../../assets/img-article/article-4.png";
import imgArticle5 from "../../../assets/img-article/article-5.png";
import imgArticle6 from "../../../assets/img-article/article-6.png";
import { Button } from "../../atoms/button";
import { FontTitleContent } from "../../atoms/font";

const News = () => {
  const handleButtonClick = () => {
    window.open(
      "https://www.detik.com/search/searchall?query=fun+run&siteid=2",
      "_blank"
    );
  };
  const articleData = [
    {
      src: imgArticle,
      dateTime: "Sabtu, 25 Nov 2023 20:00 WIB",
      paragraf:
        "Sukses Finish Marathon di Jakarta, Osha Penyandang Autisme Beberkan Prosesnya",
    },
    {
      src: imgArticle3,
      dateTime: "Selasa, 28 Nov 2023 07:42 WIB",
      paragraf:
        "Edukasi Lingkungan Hidup Bonus Sehat di 'Misi Lestari 2023: See Nature",
    },
    {
      src: imgArticle2,
      dateTime: "Minggu, 26 Nov 2023 13:04 WIB",
      paragraf: "Gokil! Puluhan Ribu Orang Ramaikan Pertamina Eco RunFest 2023",
    },
    {
      src: imgArticle4,
      dateTime: "Sabtu, 18 Nov 2023 17:39 WIB",
      paragraf:
        "Kelar Lari di CT Arsa Charity Fun Run, 'Recharge' Energi Nonton Maliq & D'essentials",
    },
    {
      src: imgArticle5,
      dateTime: "Kamis, 16 Nov 2023 16:34 WIB",
      paragraf: "CT Arsa Charity Fun Run 2023 Bertabur Emas",
    },
    {
      src: imgArticle6,
      dateTime: "Minggu, 12 Nov 2023 11:55 WIB",
      paragraf:
        "BTN Jakarta Run 2023 Dorong dan Geliatkan Sport Tourism Jakarta",
    },
  ];
  return (
    <section id="news-container">
      <div id="news-wrapper">
        <FontTitleContent>ARTIKEL TERKAIT</FontTitleContent>
        <div className="article-section-content">
          <div className="tabbar">
            <div className="tabbar-menu">
              <div className="single-tabbar active">
                <p>Artikel</p>
              </div>
              <div className="single-tabbar">
                <p>Foto</p>
              </div>
              <div className="single-tabbar">
                <p>Vidio</p>
              </div>
            </div>
          </div>
          <div className="content-article">
            <div className="cards-article">
              {articleData.map((data, index) => (
                <CardArticle
                  key={index}
                  src={data.src}
                  dateTime={data.dateTime}
                  paragraf={data.paragraf}
                />
              ))}
            </div>
            <Button onClick={handleButtonClick}>Lihat Lebih Banyak</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
