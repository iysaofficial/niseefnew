import React, { Component } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper, useLightbox } from 'simple-react-lightbox';

//Images
const pic1 = '/assets/images/main/aisef1.jpg';
const pic2 = '/assets/images/main/aisef2.jpg';
const pic3 = '/assets/images/main/aisef3.jpg';
const pic4 = '/assets/images/main/aisef4.jpg';
const pic5 = '/assets/images/main/aisef5.jpg';
const pic6 = '/assets/images/main/aisef6.jpg';
const pic7 = '/assets/images/main/aisef7.jpg';
const pic8 = '/assets/images/main/aisef8.jpg';
const pic9 = '/assets/images/main/aisef9.JPG';
const pic10= '/assets/images/main/aisef10.JPG';
const pic11= '/assets/images/main/aisef11.JPG';
const pic12= '/assets/images/main/aisef12.jpg';
const pic13= '/assets/images/main/23-12.jpg';
const pic14= '/assets/images/main/23-13.jpg';
const pic15= '/assets/images/main/23-14.jpg';

const contentBlog = [
  { images: pic1, desc: 2020 },
  { images: pic2, desc: 2020 },
  { images: pic3, desc: 2020 },
  { images: pic4, desc: 2020 },
  { images: pic5, desc: 2021 },
  { images: pic6, desc: 2021 },
  { images: pic7, desc: 2021 },
  { images: pic8, desc: 2021 },
  { images: pic9, desc: 2022 },
  { images: pic10, desc: 2022 },
  { images: pic11, desc: 2022 },
  { images: pic12, desc: 2022 },
  { images: pic13, desc: 2023 },
  { images: pic14, desc: 2023 },
  { images: pic15, desc: 2023 },
];
//Light Gallery on icon click
const Iconimage = (props) => {
  const { openLightbox } = useLightbox();
  return (
    <Link
      to={'#'}
      onClick={() => openLightbox(props.imageToOpen)}
      className="mfp-link"
      title="Preview"
    >
      <i className="ti-fullscreen icon-bx-xs"></i>
    </Link>
  );
};

class PortfolioCarousel extends Component {
  render() {
    var settings = {
      arrows: false,
      slidesToShow: 4,
      speed: 3000,
      navSpeed: 3000,
      infinite: true,
      autoplay: true,
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
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <>
        <SimpleReactLightbox>
          <SRLWrapper>
            <Slider
              className="img-carousel-content owl-carousel text-center text-white owl-none "
              {...settings}
            >
              {contentBlog.map((item, index) => (
                <div className="item p-3" key={index}>
                  <div className="dlab-box portfolio-box">
                    <div className="dlab-media dlab-img-effect dlab-img-overlay1">
                      {' '}
                      <Image src={item.images} alt="" width={100} height={100}/>
                      <div className="overlay-bx">
                        <div className="overlay-icon text-white">
                          <h5>{item.desc}</h5>
                          <Iconimage />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </SRLWrapper>
        </SimpleReactLightbox>
      </>
    );
  }
}

export default PortfolioCarousel;
