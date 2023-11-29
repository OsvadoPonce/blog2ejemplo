import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer2";
import Preloader from "./Preloader";
import $ from "jquery";
import Image from "next/image";


export const MdxPage = ({ children, title, job, author,description, date, image}) => {
  useEffect(() => {
    $(document).ready(function () {
      $("#preloader").delay(100).fadeOut("fade");
    });
  }, []);

  const width = 200;
  const height = 200;

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
     <section className="blog-details ptb-120">
     <div className="container">
      <div className="row justify-content-between">
          <div className="col-lg-8 pe-lg-5">
          {children}
          </div>
          <div className="col-lg-4">
        <div className="author-wrap text-center bg-light p-5 sticky-sidebar rounded-custom mt-5 mt-lg-0">
                            <Image src={`/${image}`} alt="author" width={width}  height={height} className="img-fluid shadow-sm rounded-circle"/>
                            <div className="author-info my-4">
                                <h5 className="mb-0">{author}</h5>
                                <span className="small">{job}</span> <br/>
                                <span className="small">{date}</span>
                            </div>
                            <p>{description}</p>
                            <ul className="list-unstyled author-social-list list-inline mt-3 mb-0">
                                <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-github"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            </ul>
                        </div>

        </div>
        </div>
      </div>
     </section>
      <Footer/>
    </div>
  );
};


