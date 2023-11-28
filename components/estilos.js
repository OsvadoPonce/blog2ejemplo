import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer2";
import Preloader from "./Preloader";
import $ from "jquery";


export const MdxPage = ({ children, title }) => {
  useEffect(() => {
    $(document).ready(function () {
      $("#preloader").delay(100).fadeOut("fade");
    });
  }, []);

  return (
    <div className="mdx-page">
      <Preloader />
      <Header/>
      <section
        className="page-header position-relative overflow-hidden ptb-120 bg-dark"
        style={{
          backgroundImage: "url(/img/page-header-bg.svg)",
          backgroundPosition: "bottom left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-12">
              <h1 className="fw-bold display-5">{title}</h1>
            </div>
          </div>
          <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
        </div>
      </section>
      <div className="mdx-content">{children}</div>
      <Footer/>
    </div>
  );
};


