// pages/index.js
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { keadaanPendaftaran } from "@/lib/registrasi";

// Pastikan CSS dari slick-carousel diimpor dengan benar
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Gambar di folder public
const Slider1 = "/assets/images/main/aisef2.jpg";
const Slider2 = "/assets/images/main/aisef1.jpg";
const Slider3 = "/assets/images/main/aisef3.jpg";

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
        className="owl-prev la la-angle-left"
        onClick={onClick}
        style={{ zIndex: 1 }}
      />
    </div>
  );
}


/**
 * Sorotan halaman depan.
 *
 * ── Kenapa tulisannya tidak lagi dipaku ───────────────────────────────────
 *
 * Sebelumnya di sini tertulis "Segera Hadir pada Tahun 2027" dan tombolnya ber-`href=""` —
 * menekannya tidak membawa ke mana pun. Keduanya harus disunting programmer
 * tiap kali pendaftaran dibuka, dan itulah kenapa halaman depan masih berkata
 * begitu berbulan-bulan setelah edisinya disiapkan di dasbor.
 *
 * Sekarang keadaannya datang dari `identitas` yang ditarik halamannya dari
 * API dasbor, dan tombolnya menunjuk ke halaman pendaftaran yang sebenarnya.
 * Yang perlu dilakukan saat pendaftaran dibuka cuma menyalakan togelnya di
 * dasbor — tidak ada satu baris pun di repo ini yang perlu disunting.
 *
 * Bawaannya tetap "belum dibuka" saat API tidak menjawab: situs yang diam
 * lebih baik daripada situs yang mengundang orang mendaftar ke pintu yang
 * belum tentu terbuka.
 *
 * ── Kenapa keadaannya ditarik LAGI di peramban ────────────────────────────
 *
 * Halaman ini statis dengan `revalidate`, jadi togel yang baru ditekan di
 * dasbor baru terlihat setelah jendela itu lewat DAN ada yang memicu
 * pembangunan ulangnya — praktisnya beberapa menit, tanpa satu pun tanda
 * bahwa sesuatu sedang terjadi. Sekali pengambilan saat halaman terbuka
 * membuat pengunjung berikutnya selalu melihat keadaan sekarang.
 *
 * Tombol Buku Panduan sengaja TIDAK ikut diubah: tautannya yang sekarang
 * bekerja, sementara guidebook edisi ini belum diterbitkan dari dasbor.
 * Menggantinya berarti menghilangkan tombol yang berfungsi.
 */
const HomeOwlSlider = ({ identitas = null, guidebook = null }) => {
  const [identitasKini, setIdentitasKini] = useState(identitas);
  const [panduan, setPanduan] = useState(guidebook);

  useEffect(() => {
    let hidup = true;
    (async () => {
      try {
        const { ambilIdentitas, ambilGuidebook } = await import("@/lib/dashboardApi");
        /* Berbarengan — dua panggilan berurutan menambah tunggu tanpa alasan,
           dan yang satu tidak bergantung hasil yang lain. */
        const [id, gb] = await Promise.all([
          ambilIdentitas({ cache: "no-store" }),
          ambilGuidebook({ cache: "no-store" }),
        ]);
        if (!hidup) return;
        if (id) setIdentitasKini(id);
        setPanduan(gb ?? null);
      } catch {
        /* Gagal mengambil berarti tetap memakai nilai dari pembangunan
           halaman — bukan tombol yang hilang. */
      }
    })();
    return () => { hidup = false; };
  }, []);

  const buka = keadaanPendaftaran(identitasKini) === "buka";
  const tahun = identitasKini?.tahun ?? "2027";

  const settings = {
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
          <Image src={Slider1} alt="Slider Image 1" width={1200} height={800} />
        </div>

        <div className="slide-content overlay-primary">
          <div className="slide-content-box container">
            <div className="text-white">
              <h2 className="text-white font-weight-400">
                NATIONAL INNOVATIVE SCIENCE ENVIRONMENTAL AND ENTREPRENEUR FAIR
                <br />
              </h2>

              <h2 className="text-white font-weight-400">
                <a>{buka ? `Pendaftaran ${tahun} Dibuka` : `Segera Hadir pada Tahun ${tahun}`}</a>
                <br />
              </h2>

              <a
                href="https://youtu.be/LAvjaf3Ztjs?si=ZPUlhiUxocfRRKlB"
                rel="noreferrer noopener"
                target="_blank"
                className="site-button m-r10 white button-lg"
              >
                After Event
              </a>

              {/* Buku Panduan muncul hanya kalau panitia sudah
                  menerbitkannya dari dasbor. Tautannya dulu dipaku ke satu
                  berkas Google Drive dan dikomentari begitu edisinya lewat —
                  jadi ia selalu tertinggal satu edisi, dan menghidupkannya
                  kembali menuntut programmer. Persis pola yang sudah
                  dibereskan untuk tulisan "Segera Hadir" di atas.

                  Belum terbit berarti tombolnya TIDAK ADA, bukan mati. */}
              {panduan?.url && (
                <a
                  href={panduan.url}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="site-button m-r10 white button-lg"
                >
                  Buku Panduan
                </a>
              )}
              <Link href="/registration/homeregist" legacyBehavior>
                <a className="site-button m-r10 white button-lg">
                  {buka
                    ? `Daftar Sekarang ${tahun}`
                    : `Segera Hadir pada Tahun ${tahun}`}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="item slide-item">
        <div className="slide-item-img">
          <Image src={Slider2} alt="Slider Image 2" width={1200} height={800} />
        </div>
        <div className="slide-content overlay-primary">
          <div className="slide-content-box container">
            <div className="text-white">
              <h2 className="text-white font-weight-400">
                NATIONAL INNOVATIVE SCIENCE ENVIRONMENTAL AND ENTREPRENEUR FAIR
                <br />
              </h2>

              <h2 className="text-white font-weight-400">
                <a>{buka ? `Pendaftaran ${tahun} Dibuka` : `Segera Hadir pada Tahun ${tahun}`}</a>
                <br />
              </h2>

              <a
                href="https://youtu.be/xA5kvu-72RU?si=K0pRjFolVOR4-aT5"
                rel="noreferrer noopener"
                target="_blank"
                className="site-button m-r10 white button-lg"
              >
                After Event
              </a>

              {/* Buku Panduan muncul hanya kalau panitia sudah
                  menerbitkannya dari dasbor. Tautannya dulu dipaku ke satu
                  berkas Google Drive dan dikomentari begitu edisinya lewat —
                  jadi ia selalu tertinggal satu edisi, dan menghidupkannya
                  kembali menuntut programmer. Persis pola yang sudah
                  dibereskan untuk tulisan "Segera Hadir" di atas.

                  Belum terbit berarti tombolnya TIDAK ADA, bukan mati. */}
              {panduan?.url && (
                <a
                  href={panduan.url}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="site-button m-r10 white button-lg"
                >
                  Buku Panduan
                </a>
              )}
              <Link href="/registration/homeregist" legacyBehavior>
                <a className="site-button m-r10 white button-lg">
                  {buka
                    ? `Daftar Sekarang ${tahun}`
                    : `Segera Hadir pada Tahun ${tahun}`}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="item slide-item">
        <div className="slide-item-img">
          <Image src={Slider3} alt="Slider Image 3" width={1200} height={800} />
        </div>
        <div className="slide-content overlay-primary">
          <div className="slide-content-box container">
            <div className="text-white">
              <h2 className="text-white font-weight-400">
                NATIONAL INNOVATIVE SCIENCE ENVIRONMENTAL AND ENTREPRENEUR FAIR
                <br />
              </h2>

              <h2 className="text-white font-weight-400">
                <a>{buka ? `Pendaftaran ${tahun} Dibuka` : `Segera Hadir pada Tahun ${tahun}`}</a>
                <br />
              </h2>
              <a
                href="https://youtu.be/xA5kvu-72RU?si=K0pRjFolVOR4-aT5"
                rel="noreferrer noopener"
                target="_blank"
                className="site-button m-r10 white button-lg"
              >
                After Event
              </a>
              {/* Buku Panduan muncul hanya kalau panitia sudah
                  menerbitkannya dari dasbor. Tautannya dulu dipaku ke satu
                  berkas Google Drive dan dikomentari begitu edisinya lewat —
                  jadi ia selalu tertinggal satu edisi, dan menghidupkannya
                  kembali menuntut programmer. Persis pola yang sudah
                  dibereskan untuk tulisan "Segera Hadir" di atas.

                  Belum terbit berarti tombolnya TIDAK ADA, bukan mati. */}
              {panduan?.url && (
                <a
                  href={panduan.url}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="site-button m-r10 white button-lg"
                >
                  Buku Panduan
                </a>
              )}
              <Link href="/registration/homeregist" legacyBehavior>
                <a className="site-button m-r10 white button-lg">
                  {buka
                    ? `Daftar Sekarang ${tahun}`
                    : `Segera Hadir pada Tahun ${tahun}`}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default HomeOwlSlider;
