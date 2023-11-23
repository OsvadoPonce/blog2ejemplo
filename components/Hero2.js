import React from "react";
import Image from "next/image";

import fondo1 from "../public/img/shape/color-particles-2.svg";
import shape1 from "../public/img/Lefthome.png";
import shape2 from "../public/img/rhome.png";
import shape3 from "../public/img/dashHome.png";
import { Col } from "react-bootstrap";
import Link from "next/link";

const Hero2 = () => {
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (window.innerWidth - clientX) / 25;
    const y = (window.innerHeight - clientY) / 25;

    // Aplica transformación a las imágenes
    document.querySelector(
      ".widget-img-1"
    ).style.transform = `translate(${x}px, ${y}px)`;
    document.querySelector(
      ".widget-img-3"
    ).style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    // Restablece la transformación cuando el mouse sale de las imágenes
    document.querySelector(".widget-img-1").style.transform = "translate(1, 1)";
    document.querySelector(".widget-img-3").style.transform = "translate(1, 1)";
  };

  return (
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <>
        {/* hero section start */}
        <section
          className="hero-section ptb-120 position-relative overflow-hidden"
          style={{
            background: `url(${fondo1})`,
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row justify-content-center text-center">
              <Col xl={8} lg={10} className="mb-5">
                <div className="hero-content-wrap">
                  <h1 className="fw-bold display-5" data-aos="fade-up">
                    From science to industry
                  </h1>
                  <p className="lead" data-aos="fade-up" data-aos-delay="50">
                    Soluciones únicas para todas tus necesidades comerciales
                  </p>
                  <div
                    className="action-btns text-center pt-4"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <Link id="link"
                      href="/Services"
                      className="btn btn-primary me-lg-3 me-sm-3"
                    >
                      Nuestros servicios
                    </Link>
                    <Link id="link"
                      href="/Contactanos"
                      className="btn btn-outline-primary"
                    >
                      Contacta a ventas
                    </Link>
                  </div>
                </div>
              </Col>
              <div className="col-lg-9">
                <div
                  className="position-relative"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <ul className="position-absolute animate-element widget-img-wrap z-2">
                    <li className="layer">
                      <Image
                        src={shape1}
                        alt="widget-img"
                        className="img-fluid widget-img-1 position-absolute shadow-lg rounded-custom"
                      />
                    </li>
                    <li className="layer">
                      <Image
                        src={shape2}
                        alt="widget-img"
                        className="img-fluid widget-img-3 position-absolute shadow-lg rounded-custom"
                      />
                    </li>
                  </ul>
                  <Image
                    src={shape3}
                    alt="dashboard image"
                    className="img-fluid position-relative rounded-custom mt-lg-5"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-dark position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z--1 py-5" />
        </section>
        {/* hero section end */}
      </>
    </div>
  );
};

export default Hero2;
