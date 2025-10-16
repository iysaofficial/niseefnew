import React, { Component } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
import CompListNews from "@/components/News/CompListNews";

// import news

class PageNews extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content bg-white">
          <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt">
            <PageTitle motherMenu="Liputan Media" activeMenu="Berita" />
          </div>
        </div>
        <CompListNews />
        <Footer />
      </>
    );
  }
}
export default PageNews;
