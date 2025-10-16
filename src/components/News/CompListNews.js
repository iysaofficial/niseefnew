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
