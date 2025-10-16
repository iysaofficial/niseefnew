import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  useEffect(() => {
    // Sidebar open/close
    const Navicon = document.querySelector(".navicon");
    const sidebarmenu = document.querySelector(".myNavbar");

    const toggleFunc = () => {
      sidebarmenu.classList.toggle("show");
    };

    Navicon.addEventListener("click", toggleFunc);

    // Sidenav li open/close
    const navUl = Array.from(
      document.querySelectorAll(".navbar-nav > li > a, .sub-menu > li > a")
    );

    navUl.forEach((el) => {
      el.addEventListener("click", function () {
        checkLi(this);
      });
    });

    const checkLi = (current) => {
      current.parentElement.parentElement
        .querySelectorAll("li")
        .forEach((el) =>
          current.parentElement !== el ? el.classList.remove("open") : ""
        );

      setTimeout(() => {
        current.parentElement.classList.toggle("open");
      }, 100);
    };

    // Sticky header on scroll
    const header = document.querySelector(".sticky-header");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners on unmount
    return () => {
      Navicon.removeEventListener("click", toggleFunc);
      navUl.forEach((el) => {
        el.removeEventListener("click", function () {
          checkLi(this);
        });
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="site-header header-transparent mo-left" id="fix-header">
      <div className="top-bar">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="dlab-topbar-left">
              <ul>
                <li>
                  <i className="fas fa-phone-alt m-r5"></i>
                  +62 882-1324-8890
                </li>
                <li>
                  <i className="fas fa-map-marker-alt m-r5"></i>
                  Jl. Kemang RT 03 RW 06 Kp. Kekupu
                </li>
                <li>
                  <i className="fas fa-globe m-r5"></i>
                  Situs Web Resmi
                </li>
                <li>
                  <i className="fas fa-envelope m-r5"></i>
                  niseef.iysa@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix">
          <div className="container clearfix">
            <div className="logo-header mostion">
              <Link href="/" className="dez-page">
                <Image
                  src="/assets/images/NISEEF.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
            </div>

            <button
              className="navbar-toggler collapsed navicon justify-content-end"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div
              className="header-nav navbar-collapse collapse myNavbar justify-content-end"
              id="navbarNavDropdown"
            >
              <div className="logo-header mostion d-md-block d-lg-none">
                <Link href="/" className="dez-page">
                  <Image
                    src="/assets/images/new-aisef.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </Link>
              </div>
              {/* Header Menu Contents */}
              <HeaderMenu />
              {/* Header Menu Contents End */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;