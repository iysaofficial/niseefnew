import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <>
        <footer className="site-footer ">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-7 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                  <div className="widget widget_services border-0">
                    <ul>
                      <li>
                        <Link href="/registration/homeindo">Buka Pendaftaran</Link>
                      </li>
                      {/* <li>
                        <Link href="/#Testimonial">Testimonials</Link>
                      </li>
                      <li>
                        <Link href="/#Categories">Categories</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4">
                  <div className="widget widget_getintuch">
                    <h5 className="m-b30 text-white ">Kontak</h5>
                    <ul>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>
                        <strong>Alamat</strong>
                        <a
                          href="https://goo.gl/maps/muWqimWHYjAgWSaQ8"
                          rel="noreferrer noopener"
                          target="_blank"
                        >
                          {" "}
                          Jl. Kemang RT 03 RW 06
                        </a>{" "}
                      </li>
                      <li>
                        <i className="fas fa-mobile-alt"></i>
                        <strong>Telephone</strong>
                        <a
                          href="https://wa.me/6288213248890"
                          rel="noreferrer noopener"
                          target="_blank"
                        >
                          +62 882-1324-8890
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
                        <strong>email</strong>
                        <a
                          href="mailto:niseef.iysa@gmail.com"
                          rel="noreferrer noopener"
                          target="_blank"
                          className="sm-font"
                        >
                          niseef.iysa@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
                  <div className="widget">
                    <h5 className="m-b30 text-white">
                      Berlangganan Sosial Kami Untuk Mengikuti
                    </h5>
                    <p className="text-capitalize m-b20">
                      “Inovasi” adalah suatu keharusan di era modern saat ini
                      era. Kata yang sederhana ini menuntut hasil yang sangat
                      besar dalam menciptakan sebuah karya baru yang disebut
                      “Penemuan” atau ‘Invention’.
                    </p>

                    <ul className="list-inline m-a0">
                      <li>
                        <a
                          href="https://www.facebook.com/IYSA-Official-384186105532427/"
                          rel="noreferrer noopener"
                          target="_blank"
                          className="site-button facebook circle mr-1"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:aseaninnovative.aisef@gmail.com"
                          rel="noreferrer noopener"
                          target="_blank"
                          className="site-button google-plus circle mr-1"
                        >
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>

                      <li>
                        <a
                          href="http://instagram.com/iysa_official"
                          rel="noreferrer noopener"
                          target="_blank"
                          className="site-button instagram circle mr-1"
                        >
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 text-right ">
                  {" "}
                  <span>Copyright &copy; {currentYear} NISEEF.</span>{" "}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 text-left ">
                  <div className="widget-link ">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-heart"></i>
                          <a href="https://www.iysa.or.id"> IYSA IT</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
