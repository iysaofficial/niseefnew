import { useEffect, useState } from "react";
import Script from "next/script";
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/Header";
import Footer from "@/components/Footer";
import { ambilIdentitas } from "@/lib/dashboardApi";
import { keadaanPendaftaran } from "@/lib/registrasi";

/**
 * Pintu masuk pendaftaran.
 *
 * ── Apa yang digantikan halaman ini ───────────────────────────────────────
 *
 * `homeindo` memaku dua tombol bertuliskan "TUTUP" yang keduanya menunjuk ke
 * halaman itu sendiri — menekannya tidak membawa ke mana pun — dan judulnya
 * menyebut "NISEEF 2026", satu edisi tertinggal. Itu bukan kelalaian
 * orangnya: keadaan yang harus diubah tangan di dalam kode akan selalu
 * tertinggal, karena yang mengingatnya harus orang dan yang mengubahnya harus
 * programmer.
 *
 * Rentang tanggal pendaftaran SENGAJA tidak ditampilkan di halaman ini.
 * Keputusan panitia, disampaikan dua kali — saat GYIIF dan lagi saat AISEEF
 * 2027 — dan yang mengembalikannya akan mengulang hal yang sama. Judulnya
 * sudah menyatakan pendaftaran dibuka atau belum; tanggalnya ada di guidebook.
 *
 * Sekarang tahun dan keadaan buka-tutupnya datang dari togel di dasbor.
 * Tidak ada lagi yang perlu disunting di sini saat pendaftaran dibuka atau
 * ditutup.
 *
 * ── Kenapa formulirnya DI SINI, bukan di dasbor ───────────────────────────
 *
 * Yang mengurus pendaftarannya tetap dasbor — peserta, tim, tagihan, dan
 * surel undangan semuanya lahir di sana, dan situs ini tidak menyentuh satu
 * tabel pun. Yang dirender di halaman ini cuma formulirnya, lewat berkas
 * sisipan dari API dasbor, supaya pendaftar tidak berpindah ke tampilan yang
 * bukan milik ajang ini tepat pada langkah yang paling menentukan.
 *
 * Wadahnya menyebut AKRONIM, bukan id edisi. Edisi yang dilayani ditentukan
 * pin di dasbor, jadi berkas ini tidak perlu disunting saat 2027 berganti
 * 2028 — divisi IT memindahkan pinnya dan situs ini ikut.
 *
 * ── Kenapa keadaannya dihitung DUA KALI ───────────────────────────────────
 *
 * Sekali di server saat halaman dibangun ulang, sekali lagi di peramban
 * setelah terpasang. Yang di server membuat halamannya sudah benar sejak
 * cetakan pertama — penting untuk mesin pencari dan untuk yang JavaScript-nya
 * lambat. Yang di peramban mengoreksi selisih waktu: halaman yang dibangun
 * lima menit lalu bisa saja sudah melewati tenggatnya.
 */
function HomeRegist({ identitas, keadaanAwal }) {
  const [keadaan, setKeadaan] = useState(keadaanAwal);

  useEffect(() => {
    setKeadaan(keadaanPendaftaran(identitas));
  }, [identitas]);

  /*
   * Wadah formulirnya baru ada di DOM setelah keadaannya "buka". Kalau
   * skripnya sudah termuat lebih dulu — dan pada perpindahan halaman memang
   * begitu — ia sudah selesai memindai dan tidak akan memindai lagi sendiri.
   */
  useEffect(() => {
    if (keadaan === "buka" && typeof window !== "undefined") {
      window.IysaDaftar?.pasang();
    }
  }, [keadaan]);

  const tahun = identitas?.tahun ?? "";
  const judul = `${identitas?.akronim ?? "NISEEF"} ${tahun}`.trim();

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
                FORMULIR PENDAFTARAN
              </h1>
              <h3 className="mx-auto mt-2 mb-2 text-sm md:text-lg lg:text-2xl">
                {keadaan === "buka"
                  ? `Pendaftaran ${judul} sudah dibuka`
                  : keadaan === "belum"
                  ? `Pendaftaran ${judul} segera dibuka`
                  : keadaan === "tutup"
                  ? `Pendaftaran ${judul} sudah ditutup`
                  : `Pendaftaran ${judul}`}
              </h3>

            </div>
          </div>

          <div className="link-web mx-auto text-center">
            {keadaan === "buka" ? (
              /*
               * Wadah formulir sisipan, dibiarkan kosong — `daftar.js` yang
               * mengisinya, di dalam shadow root supaya CSS situs ini tidak
               * bisa merusaknya dan sebaliknya.
               *
               * Warnanya diwariskan lewat custom property, satu-satunya hal
               * yang menembus shadow root. Navy `#293e92` diambil dari ujung
               * gradien `btn-custom` situs ini, supaya formulirnya memakai
               * warna NISEEF dan bukan navy bawaan IYSA.
               *
               * `data-iysa-api` disebut eksplisit meski skripnya dimuat dari
               * sana juga: ia benar di kedua keadaan, dan keadaan satunya
               * pernah terjadi — berkasnya disalin ke `public/` saat deploy
               * backend tidak mendarat, dan tanpa atribut ini permintaan
               * pertamanya menjawab 404 dengan pesan yang menuduh data,
               * bukan alamat.
               */
              <div
                data-iysa-daftar="niseef"
                data-iysa-api="https://api-dashboard.iysa.or.id"
                data-iysa-bahasa="id"
                style={{
                  "--iysa-aksen": "#293e92",
                  "--iysa-radius": "10px",
                  maxWidth: "44rem",
                  margin: "0 auto",
                  textAlign: "left",
                }}
              />
            ) : (
              /*
               * Bukan tombol yang dimatikan, melainkan keterangan.
               *
               * Halaman lama memakai dua tombol "TUTUP" yang tetap terlihat
               * seperti tombol — dan tombol mati yang terlihat hidup akan
               * diklik berulang oleh orang yang mengira halamannya rusak.
               * Yang dibutuhkan di sini kalimat, bukan kendali.
               */
              <p className="mx-auto text-center m-2">
                {keadaan === "belum"
                  ? "Pendaftaran belum dibuka. Silakan kembali pada tanggal di atas."
                  : keadaan === "tutup"
                  ? "Pendaftaran edisi ini sudah ditutup."
                  : "Informasi pendaftaran belum bisa dimuat. Silakan coba lagi sebentar."}
              </p>
            )}
          </div>
        </div>
      </section>
      <Footer />

      {/*
        `afterInteractive`: formulirnya bukan yang pertama dibaca orang saat
        halaman terbuka, jadi ia tidak perlu menahan render. `onLoad` dan
        `useEffect` di atas sama-sama memanggil `pasang` — yang pertama untuk
        kunjungan langsung, yang kedua untuk perpindahan dari halaman lain
        yang tidak memuat ulang skripnya.
      */}
      <Script
        src="https://api-dashboard.iysa.or.id/embed/daftar.js"
        strategy="afterInteractive"
        onLoad={() => window.IysaDaftar?.pasang()}
      />
    </>
  );
}

export default HomeRegist;

/** Dibangun ulang tiap lima menit — sama dengan umur cache API-nya. */
export async function getStaticProps() {
  const identitas = await ambilIdentitas();
  return {
    props: { identitas, keadaanAwal: keadaanPendaftaran(identitas) },
    revalidate: 300,
  };
}
