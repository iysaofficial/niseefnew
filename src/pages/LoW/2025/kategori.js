import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
const bnr1 = "/assets/images/banner/bnr4.jpg";

const kategori = () => {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- inner page banner --> */}
        <div
          className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt"
          style={{ backgroundImage: "url(" + bnr1 + ")" }}
        >
          <PageTitle motherMenu="Daftar Pemenang" activeMenu="Daftar Pemenang Tahun 2025" />
        </div>
        {/* <!-- inner page banner END --> */}

        <div class="container page">
          <div className="text-center">
            <h3>
              Pilih berdasarkan Kategori acara yang Anda ikuti
            </h3>
          </div>
          <div className=" wrapper-btn text-center">
            <Link
              href="https://drive.google.com/file/d/1AFiLU02ce3vFSOdhYjMxp5ooOXynCem6/view?usp=sharing"
              legacyBehavior
            >
              <a
                target="_blank"
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Special Award{" "}
              </a>
            </Link>
            <Link href="/LoW/2025/offline2025" legacyBehavior>
              <a
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                NISEEF OFFLINE{" "}
              </a>
            </Link>
            <Link href="/LoW/2025/online2025" legacyBehavior>
              <a
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                NISEEF ONLINE{" "}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default kategori;
