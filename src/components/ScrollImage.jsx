import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import data from "../assets/data";
import { Link } from "react-router-dom";

function ScrollImage() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4">
      <Slider {...settings}>
        {data.map((prods, i) => (
          <Link to={`/product/${prods.id}`}><div
            key={i}
            className="group p-4 transition-transform duration-500 transform hover:scale-105"
          >
            <div className="overflow-hidden rounded-lg" onClick={window.scrollTo({top:0,behavior:"smooth"})}>
              <img
                src={prods.images[0]}
                alt={`Product ${i}`}
                className="w-full h-[250px] object-cover"
              />
            </div>
            <p className="my-2 text-center text-sm font-medium">{prods.name}</p>
            <div className="flex justify-center gap-2">
              <p className="text-lg font-bold text-gray-800">${prods.newPrice}</p>
              <p className="text-lg font-bold text-gray-400 line-through">
                ${prods.oldPrice}
              </p>
            </div>
          </div></Link>
        ))}
      </Slider>
    </div>
  );
}

export default ScrollImage;
