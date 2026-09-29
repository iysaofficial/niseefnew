import Navigation from "@/components/Header";
import Footer from "@/components/Footer";
import { indonesiaOnlineTerms, indonesiaOfflineTerms } from "@/data/terms";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";

function HomeIndo() {
  const [showModal, setShowModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [redirectLink, setRedirectLink] = useState("");
  const [termsContent, setTermsContent] = useState("");
  
  const handleOpenModal = (link, terms) => {
    setRedirectLink(link); // Set link tujuan redirect
    setTermsContent(terms); // Set isi terms sesuai pilihan
    setShowModal(true); // Tampilkan modal
  };

  const handleAccept = () => {
    if (termsAccepted) {
      sessionStorage.setItem("termsAccepted", "true"); // Menyimpan status setuju di sessionStorage
      setShowModal(false);
      window.location.href = redirectLink;
    } else {
      alert("Harap setujui Syarat & Ketentuan untuk melanjutkan.");
    }
  };

  useEffect(() => {
    const hasAcceptedTerms = sessionStorage.getItem("termsAccepted");
    if (hasAcceptedTerms === "true") {
      setTermsAccepted(true); // Set status sudah diterima
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          NISEEF - NATIONAL INNOVATIVE SCIENCE ENVIRONMENTAL AND ENTREPRENEUR
          FAIR
        </title>
      </Head>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <div className="divider"></div>
        <h1>Registrasi</h1>
        <Link href="/" legacyBehavior>
          <a>Halaman Sebelumnya</a>
        </Link>
      </div>
      {/* PAGE HEADER END */}
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto mb-2 text-sm md:text-lg lg:text-5xl">
                FORMULIR PENDAFTARAN UNTUK PESERTA INDONESIA
              </h1>
              <h3 className="mx-auto mt-2 mb-2 text-sm md:text-lg lg:text-2xl">
                Pilih Kategori Kompetisi untuk Pendaftaran NISEEF 2026
              </h3>
            </div>
          </div>
          {/*
            Dua tombol bertuliskan "TUTUP" yang keduanya menunjuk ke halaman
            ini sendiri diganti satu tautan ke halaman pendaftaran.

            Tombol mati yang tetap terlihat seperti tombol akan diklik
            berulang oleh orang yang mengira halamannya rusak — dan di sini
            keduanya memang membawa kembali ke halaman yang sama, jadi yang
            terjadi persis itu. Buka-tutupnya sekarang dibaca dari dasbor di
            halaman tujuan, bukan dipaku di sini.
          */}
          <div className="link-web mx-auto text-center">
            <Link href="/registration/homeregist" legacyBehavior>
              <a className="btn btn-custom text-center me-lg-5">
                BUKA FORMULIR PENDAFTARAN
              </a>
            </Link>
          </div>
          {/* <div className="link-web mx-auto text-center">
            <a
              className="btn btn-custom text-center me-lg-5 "
              onClick={() =>
                handleOpenModal(
                  "/registration/indo-online",
                  indonesiaOnlineTerms
                )
              }
            >
              Kompetisi Daring <i className="fa-solid fa-earth-americas"></i>
            </a>
            <a
              className="btn btn-custom text-center me-lg-5 "
              onClick={() =>
                handleOpenModal(
                  "/registration/indo-offline",
                  indonesiaOfflineTerms
                )
              }
            >
              Kompetisi Luring <i className="fa-solid fa-earth-americas"></i>
            </a>
          </div> */}
        </div>
      </section>

      {/* Modal untuk Terms & Conditions */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="text-4xl">Syarat & Ketentuan</h2>
            <div>{termsContent}</div> {/* Isi dinamis */}
            <div className="checkbox mt-2">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <label htmlFor="terms">Saya menyetujui Syarat & Ketentuan di atas</label>
            </div>
            <div className="modal-actions">
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Kembali
              </button>
              <button className="btn btn-primary" onClick={handleAccept}>
                Terima & Lanjutkan
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default HomeIndo;
