import React from "react";

const Categories = () => {
  const settings = {
    arrows: false,
    slidesToShow: 4,
    speed: 1500,
    navSpeed: 1500,
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
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (

    <section className="categories-section">
  <div className="categories-container">
    <div className="categories-item p-1">

      {/* Entrepreneur */}
      <div className="box-item-service text-center">
        <div className="item-service-content m-b40">
          <h5>Entrepreneur</h5>
          <div className="icon-bx-md radius border-1 m-t40 m-b20">
            <span className="icon-cell">
              <i className="fas fa-briefcase"></i>
            </span>
          </div>
        </div>
      </div>

      {/* Social Science */}
      <div className="box-item-service text-center">
        <div className="item-service-content m-b40">
          <h5>Social Science</h5>
          <div className="icon-bx-md radius border-1 m-b20 m-t0">
            <span className="icon-cell">
              <i className="fas fa-users"></i>
            </span>
          </div>
        </div>
      </div>

      {/* Environment Science */}
      <div className="box-item-service text-center">
        <div className="item-service-content m-b40">
          <h5>Environment Science</h5>
          <div className="icon-bx-md radius border-1 m-t40 m-b20">
            <span className="icon-cell">
              <i className="fas fa-leaf"></i>
            </span>
          </div>
        </div>
      </div>

      {/* Inovation Science */}
      <div className="box-item-service text-center">
        <div className="item-service-content m-b40">
          <h5>Inovation Science</h5>
          <div className="icon-bx-md radius border-1 m-b20 m-t0">
            <span className="icon-cell">
              <i className="fas fa-lightbulb"></i>
            </span>
          </div>
        </div>
      </div>

      {/* Industrial Application */}
      <div className="box-item-service text-center">
        <div className="item-service-content m-b40">
          <h5>Industrial Application</h5>
          <div className="icon-bx-md radius border-1 m-t40 m-b20">
            <span className="icon-cell">
              <i className="fas fa-industry"></i>
            </span>
          </div>
        </div>
      </div>

      {/* Informatics, Robotic and AI */}
      <div className="box-item-service text-center">
        <div className="item-service-content m-b40">
          <h5>Informatics, Robotic and Artificial Intelligence (AI)</h5>
          <div className="icon-bx-md radius border-1 m-b20 m-t0">
            <span className="icon-cell">
              <i className="fas fa-robot"></i>
            </span>
          </div>
        </div>
      </div>

      {/* Life Science */}
      <div className="box-item-service text-center">
        <div className="item-service-content m-b40">
          <h5>Life Science</h5>
          <div className="icon-bx-md radius border-1 m-t40 m-b20">
            <span className="icon-cell">
              <i className="fas fa-dna"></i>
            </span>
          </div>
        </div>
      </div>

      {/* Physics, Energy and Engineering */}
      <div className="box-item-service text-center">
        <div className="item-service-content m-b40">
          <h5>Physics, Energy and Engineering</h5>
          <div className="icon-bx-md radius border-1 m-b20 m-t0">
            <span className="icon-cell">
              <i className="fas fa-atom"></i>
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

  );
}

export default Categories;
