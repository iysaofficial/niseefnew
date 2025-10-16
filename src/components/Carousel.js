import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imgblog = [
  { image: '/assets/images/client-logo/iysa-white.png' },
  { image: '/assets/images/client-logo/undip.png' },
  { image: '/assets/images/client-logo/iysa-white.png' },
  { image: '/assets/images/client-logo/undip.png' },
];

const Index7ClientCarousel = () => {
  const settings = {
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    autoplay: true,
    speed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider className="img-carousel owl-carousel owl-none" {...settings}>
      {imgblog.map((item, index) => (
        <div className="item" key={index}>
          <div className="client-logo text-center">
            <Image src={item.image} alt={`Client logo ${index + 1}`} width={180} height={180} />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Index7ClientCarousel;
