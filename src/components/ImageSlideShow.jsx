import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

function ImageSlideShow({ images }) {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      };

  return (
    <div className="w-full max-w-full ">
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i} className="w-full">
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="h-[300px] w-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlideShow;
