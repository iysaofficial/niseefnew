import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
// import TestimonialCarousel from "@/components/TestimonialCarousel";
// import PortfolioCarousel from "@/components/PortfolioCarousel";
import Categories from "@/components/Categories";
import ImgCarouselContent from "@/components/ImgCarouselContent";
import HomeOwlSlider from "@/components/HomeOwlSlider";

const inter = Inter({ subsets: ["latin"] });

const pic4 = "/assets/images/main/img.jpg";
const bgimg2 = "/assets/images/background/bg-map.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          NISEEF - NATIONAL INNOVATIVE SCIENCE ENVIRONMENTAL AND ENTREPRENEUR
          FAIR
        </title>
      </Head>
      <Header />
      <section>
        <div className="page-content bg-white">
          {/*  Slider Banner */}
          <div className="owl-slider-banner main-slider">
            <HomeOwlSlider />
          </div>
          {/*  Slider Banner */}
          <div className="content-block">
            {/* <!-- About Us --> */}
            <div className="section-full bg-white content-inner-1 about-us">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-8">
                    <div className="about-box row">
                      <div className="col-lg-4">
                        <h2 className="box-title m-tb0">
                          Tentang NISEEF
                          <span className="bg-primary"></span>
                        </h2>
                        <h4 className="text-gray-dark">
                          Bagikan pengalaman Anda kepada kami
                        </h4>
                      </div>
                      <div className="col-lg-8">
                        <p>
                          IYSA sebagai lembaga yang konsen di bidang pendidikan
                          dan peneliti muda yang mampu melakukan kegiatan
                          &quot;inovasi, environmental dan entrepreneur&quot;
                          untuk memecahkan permasalahan di masyarakat. Bukan
                          hanya baru dalam pikiran (kognitif), tetapi juga baru
                          karena belum bisa diterima secara luas sehingga ada
                          kemajuan peradaban. Oleh karena itu, IYSA mengadakan
                          beberapa kompetisi penemuan, inovatif, dan proyek
                          sains tingkat nasional.
                        </p>
                        <p>
                          Melalui kegiatan tersebut siswa dari tingkat dasar,
                          menengah, dan universitas berpartisipasi dengan
                          mempresentasikan proyeknya di depan para juri. untuk
                          kedua kalinya , IYSA akan menyelenggarakan kompetisi
                          Innovative, Environmental dan Entrepreneur Fair
                          bertaraf nasional bertajuk “National Innovative
                          Science Environmental dan Entrepreneur Fair (NISEEF)”
                          sebagai wadah pembelajaran yang tepat guna. untuk
                          membina generasi muda kita.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-4 about-img">
                    <Image
                      src={pic4}
                      alt="About Us"
                      sizes="100vw"
                      width={500}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- About Us End --> */}
            {/* <!-- Our Services --> */}
            <div className="section-full content-inner-2" id="Categories">
              <div className="container">
                <div className="section-head text-black text-center">
                  <h2 className="box-title m-tb0">
                    Kategori <span className="bg-primary"></span>
                  </h2>
                  <p>Kategori mana yang kalian ingin ikuti?</p>
                </div>
              </div>
              <div className="development-box">
                <div className="container">
                  <Categories />
                </div>
              </div>
            </div>
            <div className="section-full bg-white content-inner-1 about-us">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-8">
                    <div className="about-box row">
                      <div className="col-lg-4">
                        <h2 className="box-title m-tb0">
                          Tentang NISEEF
                          <span className="bg-primary"></span>
                        </h2>
                        <h4 className="text-gray-dark">
                          Bagikan pengalaman Anda kepada kami
                        </h4>
                      </div>
                      <div className="col-lg-8">
                        {/* <p>
                          &quot;Innovation&quot; is a must in today&apos;s
                          modern era. This simple word demands a huge result
                          within creating a new work which is called
                          &quot;Invention&quot;.
                        </p> */}
                        <p>
                          IYSA sebagai lembaga yang konsen di bidang pendidikan
                          dan peneliti muda yang mampu melakukan kegiatan
                          &quot;inovasi, environmental dan entrepreneur&quot;
                          untuk memecahkan permasalahan di masyarakat. Bukan
                          hanya baru dalam pikiran (kognitif), tetapi juga baru
                          karena belum bisa diterima secara luas sehingga ada
                          kemajuan peradaban. Oleh karena itu, IYSA mengadakan
                          beberapa kompetisi penemuan, inovatif, dan proyek
                          sains tingkat nasional.
                        </p>
                        <p>
                          Melalui kegiatan tersebut siswa dari tingkat dasar,
                          menengah, dan universitas berpartisipasi dengan
                          mempresentasikan proyeknya di depan para juri. untuk
                          kedua kalinya , IYSA akan menyelenggarakan kompetisi
                          Innovative, Environmental dan Entrepreneur Fair
                          bertaraf nasional bertajuk “National Innovative
                          Science Environmental dan Entrepreneur Fair (NISEEF)”
                          sebagai wadah pembelajaran yang tepat guna. untuk
                          membina generasi muda kita.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-4 about-img">
                    <Image
                      src={pic4}
                      alt="About Us"
                      sizes="100vw"
                      width={500}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="section-full content-inner"
              style={{
                backgroundImage: `url(${bgimg2})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              id="Testimonial"
            >
            </div>
            {/* <!-- Testimonials END --> */}
          </div>
        </div>
      </section>
      <div className="section-full bg-primary-dark p-tb15">
        <div className="container">
          <Carousel />
        </div>
      </div>
      <Footer />
    </>
  );
}
