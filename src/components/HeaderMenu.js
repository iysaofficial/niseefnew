import Link from "next/link";

const HeaderMenu = () => {
  return (
    <>
      <ul className="nav navbar-nav">
        <li>
          <Link href="/" rel="noreferrer noopener" className="dez-page">
            Beranda
          </Link>
        </li>
        <li>
          <Link href="/LoW/lowtahun">Daftar Pemenang</Link>
        </li>
        <li>
          <Link href="#">
            Liputan Media <i className="fa fa-chevron-down"></i>{" "}
          </Link>
          <ul className="sub-menu left">
            <li>
              <Link href="/NewsPage/PageNews" legacyBehavior>
                <a rel="noreferrer noopener" className="dez-page">
                  Berita dari Media
                </a>
              </Link>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1kSuGCVFkieMQPlqMEWeIijz1Pqa1g5GJ/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="dez-page"
              >
                Pesan Siaran 2025
              </a>
            </li>
          </ul>
        </li>
        <li>
          <Link href="#" legacyBehavior>
            <a>
              Sertifikat <i className="fa fa-chevron-down"></i>
            </a>
          </Link>
          <ul className="sub-menu left">
            <li>
              <a
                href="https://drive.google.com/drive/folders/1ircNMSRvFbZS3L2SEG-xtW79uLZd3QwI?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="dez-page"
              >
                Sertifikat Supervisor 2025
              </a>
            </li>
          </ul>
        </li>
        <li>
          <Link href="#">
            Kurasi <i className="fa fa-chevron-down"></i>{" "}
          </Link>
          <ul className="sub-menu left">
            <li>
              <a
                href="https://drive.google.com/drive/folders/1uQlDcr7_2sWDcj2Paa81ypdVa2WPEB57?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="dez-page"
              >
                Kurasi 2025
              </a>
            </li>
          </ul>
        </li>
        <li>
          <Link href="#">
            Galeri<i className="fa fa-chevron-down"></i>{" "}
          </Link>
          <ul className="sub-menu left">
            <li>
              <a
                href="https://drive.google.com/drive/folders/1fSkCJeQTkbOF5zUA7Le1-rNrdhY_nULc?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="dez-page"
              >
                Galeri 2025
              </a>
            </li>
          </ul>
        </li>
        <li>
          <Link href="#">
            Sertifikat<i className="fa fa-chevron-down"></i>{" "}
          </Link>
          <ul className="sub-menu left">
            <li>
              <a
                href="https://drive.google.com/drive/folders/1ircNMSRvFbZS3L2SEG-xtW79uLZd3QwI?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="dez-page"
              >
                Sertifikat Supervisor 2025
              </a>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/Faq" rel="noreferrer noopener" className="dez-page">
            FAQ
          </Link>
        </li>
        <li>
          <Link href="/Contact" rel="noreferrer noopener" className="dez-page">
            Kontak
          </Link>
        </li>
      </ul>
    </>
  );
};

export default HeaderMenu;
