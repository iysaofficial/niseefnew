import React, { Component } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
import AccordionBlog from "@/components/AccordionBlog";
import VideoPopup from "@/components/Element/VideoPopup";
import AccordionBlog2 from "@/components/Element/AccodcionBlog2";
import AccordionBlog3 from "@/components/Element/AccordionBlog3";
import Head from "next/head";
const bnr1 = "/assets/images/banner/bnr4.jpg";
const pattern = "/assets/images/pattern/pic1.jpg";
const about = "/assets/images/about/pict100.png";

class Faqs extends Component {
  render() {
    return (
      <>
        <Head>
          <title>
            NISEEF - NATIONAL INNOVATIVE SCIENCE ENVIRONMENTAL AND ENTREPRENEUR
            FAIR
          </title>
        </Head>
        <Header />
        <div className="page-content bg-white">
          {/* <!-- inner page banner --> */}
          <div
            className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt"
            style={{ backgroundImage: "url(" + bnr1 + ")" }}
          >
            <PageTitle motherMenu="Faq's" activeMenu="Faq's" />
          </div>
          {/* <!-- inner page banner END --> */}

          {/* <!-- contact area --> */}
          <div className="content-block">
            {/* <!-- Your Faq --> */}
            <div
              className="section-full overlay-white-middle content-inner"
              style={{ backgroundImage: "url(" + pattern + ")" }}
            >
              <div className="container">
                <div className="section-head text-black text-center">
                  <h3>FAQ</h3>
                  <div className="dlab-separator bg-primary"></div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 m-b30">
                    <div className="faq-video">
                      <VideoPopup />
                      <Image
                        src={about}
                        alt=""
                        className="img-cover radius-sm"
                        width={550}
                        height={310}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 m-b30">
                    <h3 className="text-center">Setelah mendaftar</h3>
                    <AccordionBlog />
                    <h3 className="text-center">Selama Acara Berlangsung</h3>
                    <AccordionBlog2 />
                    <h3 className="text-center">Setelah Acara</h3>
                    <AccordionBlog3 />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Your Faq End --> */}
          </div>
          {/* <!-- contact area END --> */}
        </div>

        <Footer />
      </>
    );
  }
}
export default Faqs;
