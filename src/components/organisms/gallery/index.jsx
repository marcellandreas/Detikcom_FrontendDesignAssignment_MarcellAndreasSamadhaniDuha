import "./style.css";
import React, { useState } from "react";
// import { galleryImages } from "../../../assets";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import img1 from "../../../assets/img-gallery/gallery-1.png";
import img3 from "../../../assets/img-gallery/gallery-3.png";
import img4 from "../../../assets/img-gallery/gallery-4.png";
import img5 from "../../../assets/img-gallery/gallery-5.png";

import PhotoImageGallery from "../../molecules/photo";
import { FontTitleContent } from "../../atoms/font";

const Gallery = () => {
  const galleryImages = [img1, img3, img4, img5];
  return (
    <section id="gallery-wrapper">
      <div className="gallery">
        <FontTitleContent>GALERI SUDIRMAN RUN 2022</FontTitleContent>
        <div className="slider-menus-gallery">
          <div className="slider-menu-gallery">
            <PhotoImageGallery images={galleryImages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
