import Image from "next/image";
import Link from "next/link";

// Import Gambar
const Gambar6 = "/assets/images/News/AISEEF-NISEEF-2025.jpg";

const CompListNews = () => {
  return (
    <>
      {/* <h1 className="text-center mt-2 fw-bold">NEWS 2024</h1> */}
      <div className="container mt-4">
        <div className="row">
          {/* list 1 awal */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <Image
                src="https://res.cloudinary.com/dtik1z1qd/image/upload/v1777361862/niseef1_bsbtru.jpg"
                className="card-img-top img-fluid p-2"
                alt="Gambar Berita 1"
                width={200}
                height={100}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link href="/NewsPage/News6">
                    Inovasi Cokelat Fungsional Murid MAN 1 Kudus Raih Perak di NISEEF 2026
                  </Link>
                </h5>
                <p className="card-text">
                  KUDUS – Di tengah persoalan anemia defisiensi besi yang masih membayangi remaja, gagasan sederhana berbasis pangan justru lahir dari ruang belajar madrasah. Melalui inovasi cokelat fungsional .....
                </p>
                <h1 className="btn-primary btn">
                  <Link href="https://man1kudus.sch.id/on/inovasi-cokelat-fungsional-murid-man-1-kudus-raih-perak-di-niseef-2026/" target="_blank" rel="noreferrer noopener">Selengkapnya</Link>
                </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <Image
                src="https://res.cloudinary.com/dtik1z1qd/image/upload/v1777361863/niseef2_cnly3d.png"
                className="card-img-top img-fluid p-2"
                alt="Gambar Berita 1"
                width={200}
                height={100}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link href="/NewsPage/News6">
                    Siswa MAN 4 Jakarta berhasil menorehkan empat medali di Ajang Riset AISEEF dan NISEEF 2026
                  </Link>
                </h5>
                <p className="card-text">
                  MAN 4 Jakarta Selatan (09/03/2026) – Madrasah Aliyah Negeri (MAN) 4 Jakarta kembali menorehkan prestasi di bidang riset. Tak tanggung-tanggung....
                </p>
                <h1 className="btn-primary btn">
                  <Link href="https://man4jkt.sch.id/2026/03/09/siswa-man-4-jakarta-berhasil-menorehkan-empat-medali-di-ajang-riset-aiseef-dan-niseef-2026/" target="_blank" rel="noreferrer noopener">Selengkapnya</Link>
                </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <Image
                src="https://res.cloudinary.com/dtik1z1qd/image/upload/v1777361861/niseef3_rdjctw.jpg"
                className="card-img-top img-fluid p-2"
                alt="Gambar Berita 1"
                width={200}
                height={100}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link href="/NewsPage/News6">
                    SMA Negeri 1 Maos Raih Medali Perak Dalam NISEEF 2026
                  </Link>
                </h5>
                <p className="card-text">
                 Pada kesempatan ini, tim SMA Negeri 1 Maos yang beranggotakan Fadila Asya Palevi, Awan Satria Ardrani, Khinanti Sekar Nareswari, Naufal Aziz, Kayla Amanda Putri Wibowo, dan Daffa Nur ....
                </p>
                <h1 className="btn-primary btn">
                  <Link href="https://cilacapkab.go.id/v3/sma-negeri-1-maos-meraih-medali-perak-dalam-niseef-2026/" target="_blank" rel="noreferrer noopener">Selengkapnya</Link>
                </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <Image
                src={Gambar6}
                className="card-img-top img-fluid p-2"
                alt="Gambar Berita 1"
                width={200}
                height={100}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link href="/NewsPage/News6">
                    Bikin Bangga! UPITRA Kembali Meraih Medali Emas di Ajang Internasional AISEEF & NISEEF 2025
                  </Link>
                </h5>
                <p className="card-text">
                  Universitas Pignatelli Triputra (UPITRA) kembali mencatat prestasi gemilang di ajang internasional AISEEF & NISEEF 2025 dengan meraih medali emas....
                </p>
                <h1 className="btn-primary btn">
                  <Link href="https://solo.tribunnews.com/2025/02/17/bikin-bangga-upitra-kembali-meraih-medali-emas-di-ajang-internasional-aiseef-niseef-2025" target="_blank" rel="noreferrer noopener">Selengkapnya</Link>
                </h1>
              </div>
            </div>
          </div>
          {/* list 1 akhir */}
          </div>
      </div>
    </>
  );
};

export default CompListNews;
