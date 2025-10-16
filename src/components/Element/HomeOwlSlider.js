import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";

const Slider1 = "/assets/images/main/aisef1.jpg";
const Slider2 = "/assets/images/main/aisef2.jpg";
const Slider3 = "/assets/images/main/aisef3.jpg";
const Slider4 = "/assets/images/main/coming.jpg";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="owl-nav">
      <div className="owl-next la la-angle-right" onClick={onClick} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="owl-nav">
      <div
        className=" owl-prev la la-angle-left"
        onClick={onClick}
        style={{ zIndex: 1 }}
      />
    </div>
  );
}

class HomeOwlSlider extends Component {
  render() {
    var settings = {
      arrows: true,
      dots: true,
      slidesToShow: 1,
      infinite: true,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <Slider
        className="owl-slider owl-carousel owl-theme owl-none"
        {...settings}
      >
        <div className="item slide-item">
          <div className="slide-item-img">
            <Image
              src={Slider1}
              className="w-100"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className="slide-content overlay-primary">
            <div className="slide-content-box container">
              <div className="max-w600 text-white">
                <h2 className="text-white font-weight-400">
                  ASEAN INNOVATIVE SCIENCE ENVIRONMENTAL AND ENTREPRENEUR FAIR
                  <br />
                </h2>

                <h2 className="text-white font-weight-400">
                  <b>Coming Soon 2025</b>
                  <br />
                </h2>
                <a
                  href="https://youtu.be/iUgvM_VA1U8"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="site-button m-r10 white button-lg"
                >
                  After Movie
                </a>
                <a
                  href="/indoregist"
                  rel="noreferrer noopener"
                  className="site-button m-r10 white button-lg"
                >
                  Regist
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item slide-item">
          <div className="slide-item-img">
            <Image src={Slider3} className="w-100" alt="" width={100} height={100}/>
          </div>
          <div className="slide-content overlay-primary">
            <div className="slide-content-box container">
              <div className="max-w600 text-white">
                <h2 className="text-white font-weight-400">
                  ASEAN INNOVATIVE SCIENCE ENVIRONMENTAL AND ENTREPRENEUR FAIR
                  <br />
                </h2>

                <h2 className="text-white font-weight-400">
                  <b>Coming Soon 2025</b>
                  <br />
                </h2>
                <a
                  href="https://youtu.be/iUgvM_VA1U8"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="site-button m-r10 white button-lg"
                >
                  After Movie
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item slide-item">
          <div className="slide-item-img">
            <Image src={Slider2} className="w-100" alt="" width={100} height={100}/>
          </div>
          <div className="slide-content overlay-primary">
            <div className="slide-content-box container">
              <div className="max-w600 text-white">
                <h2 className="text-white font-weight-400">
                  ASEAN INNOVATIVE SCIENCE ENVIRONMENTAL AND ENTREPRENEUR FAIR
                  <br />
                </h2>

                <h2 className="text-white font-weight-400">
                  <b>Coming Soon 2025</b>
                  <br />
                </h2>
                <a
                  href="https://youtu.be/iUgvM_VA1U8"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="site-button m-r10 white button-lg"
                >
                  After Movie
                </a>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default HomeOwlSlider;
