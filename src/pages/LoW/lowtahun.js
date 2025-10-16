import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";

const bnr1 = "/assets/images/banner/bnr4.jpg";

const lowtahun = () => {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- inner page banner --> */}
        <div
          className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt"
          style={{ backgroundImage: "url(" + bnr1 + ")" }}
        >
          <PageTitle motherMenu="Daftar Pemenang" activeMenu="Daftar Pemenang Setiap Tahun" />
        </div>
        {/* <!-- inner page banner END --> */}

        <div class="container page">
          <div className="text-center">
            <h3>Pilih berdasarkan tahun event yang di ikuti </h3>
          </div>
          <div className=" wrapper-btn text-center">
          <Link href="/LoW/2025/kategori" legacyBehavior>
              <a
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                2025{" "}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default lowtahun;
