import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
const bnr1 = "/assets/images/banner/bnr4.jpg";

const online2026 = () => {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- inner page banner --> */}
        <div
          className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt"
          style={{ backgroundImage: "url(" + bnr1 + ")" }}
        >
          <PageTitle motherMenu="Daftar Pemenang" activeMenu="Daftar Pemenang Online Tahun 2026" />
        </div>
        {/* <!-- inner page banner END --> */}

          <div class="container page">
            <div className="text-center">
            <h3>Pilih berdasarkan level acara online yang kalian ikuti</h3>
            </div>
            <div className=" wrapper-btn text-center">
              <a
                href="https://drive.google.com/file/d/16bMGg1BQgA44NgSMzuI-kFFuWloYyPBi/view?usp=sharing"
                target="_blank"
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Universitas{" "}
              </a>
              <a
                href="https://drive.google.com/file/d/1LfXXxB8ebrX7YGY5vEdLOvTaHYdoLCd4/view?usp=sharing"
                target="_blank"
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Sekolah Menengah Atas (SMA){" "}
              </a>
              <a
                href="https://drive.google.com/file/d/1TAum9plYXTEUZmBcqMjmXdcScyeSrO0L/view?usp=sharing"
                target="_blank"
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Sekolah Menengah Pertama (SMP){" "}
              </a>
              <a
                href="https://drive.google.com/file/d/1FEITx5CjllI8OG0AIYU1DCYNQdvwZWwa/view?usp=sharing"
                target="_blank"
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Sekolah Dasar (SD){" "}
              </a>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default online2026;
