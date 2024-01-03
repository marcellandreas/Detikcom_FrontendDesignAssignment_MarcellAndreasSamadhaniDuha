import { useEffect, useState } from "react";
import "./style.css";

import img1 from "../../../assets/img-logo/logo-1.png";
import img2 from "../../../assets/img-logo/logo-2.png";
import img3 from "../../../assets/img-logo/logo-3.png";
import img4 from "../../../assets/img-logo/logo-4.png";
import img5 from "../../../assets/img-logo/logo-5.png";
import img6 from "../../../assets/img-logo/logo-6.png";
import img7 from "../../../assets/img-logo/logo-7.png";
import img8 from "../../../assets/img-logo/logo-8.png";

const Sponsors = () => {
  const logos = [img1, img2, img3, img4, img5, img6, img7, img8];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    //  <section id="sponsors-wrapper">
    <div className="slider">
      <div className="slide-track">
        {logos.map((data, i) => (
          <div key={i} className="slide">
            <img src={data} alt="" />
          </div>
        ))}
      </div>
    </div>
    //  </section>
  );
};

export default Sponsors;
