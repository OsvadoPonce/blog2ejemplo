import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import $ from "jquery";

import imgnosotros from "../public/img/nosotros1.jpg";
import imgnosotros2 from "../public/img/talent.JPG";
import imgswarm from "../public/img/swarmE.JPG";

import imgBackgroud1 from "../public/img/page-header-bg.svg";
import imgBackgroud2 from "../public/img/shape/dot-dot-wave-shape.svg";
import shape1 from "../public/img/color-shape/image-2.svg";
import shape2 from "../public/img/color-shape/feature-3.svg";
import team1 from "../public/img/Juan.jpg";
import team2 from "../public/img/Jatz.jpg";
import team3 from "../public/img/Gibran.jpg";

const Nosotros = () => {
  useEffect(() => {
    $(document).ready(function () {
      $("#preloader").delay(100).fadeOut("fade");
    });
  }, []);
  return (
    <div>
      <Preloader />
      <Header />
      <Head>
        <title>Nosotros</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <section
          className="about-header-section ptb-120 position-relative overflow-hidden bg-dark">
          <Image
            src={imgBackgroud1}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading-wrap d-flex justify-content-between z-5 position-relative">
                  <div className="about-content-left">
                    <div className="about-info mb-5">
                      <h1 className="fw-bold display-5">¿Quiénes somos?</h1>
                      <p className="lead">
                        Somos una empresa apasionada por la inteligencia
                        artificial y su implementación para potenciar a las
                        empresas Mexicanas. En Swarm Tech creamos herramientas
                        inteligentes enfocadas en la optimización de procesos y
                        toma de decisiones.
                      </p>
                      <Link
                        id="link"
                        href="#our-team"
                        className="btn btn-primary mt-4 me-3"
                      >
                        Conozca a nuestro equipo
                      </Link>
                    </div>
                    <Image
                      src={imgnosotros}
                      alt="about"
                      className="img-fluid about-img-first mt-5 rounded-custom shadow"
                    />
                  </div>
                  <div className="about-content-right">
                    <Image
                      src={imgnosotros2}
                      alt="about"
                      className="img-fluid mb-5 rounded-custom shadow"
                    />
                    <Image
                      src={imgswarm}
                      alt="about"
                      className="rounded-custom about-img-last shadow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z-2 py-5"></div>
        </section>
        {/*our story section start*/}
        <section
          className="our-story-section pt-60 pb-120"
          style={{
            background: `url(${imgBackgroud2})`,
            backgroundPosition: "left bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5 col-md-12 order-lg-1">
                <div className="section-heading">
                  <h2>Misión:</h2>
                  <p>
                    Fomentar el uso de la inteligencia artificial con el
                    objetivo de impulsar la industria y agricultura mexicana en
                    el mundo.
                  </p>
                </div>
                <div className="section-heading">
                  <h2>Visión:</h2>
                  <p>
                    Posicionarnos en el top 10 de las empresas tecnológicas más
                    importantes en el mundo.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 order-lg-0">
                <div className="story-grid-wrapper position-relative">
                  {/*animated shape start*/}
                  <ul className="position-absolute animate-element parallax-element shape-service d-none d-lg-block">
                    <li className="layer" data-depth="0.02">
                      <Image
                        src={shape1}
                        alt="shape"
                        className="img-fluid position-absolute color-shape-2 z-5"
                      />
                    </li>
                    <li className="layer" data-depth="0.03">
                      <Image
                        src={shape2}
                        alt="shape"
                        className="img-fluid position-absolute color-shape-3"
                      />
                    </li>
                  </ul>
                  {/*animated shape end*/}
                  <div className="story-grid rounded-custom bg-dark overflow-hidden position-relative">
                    <div className="story-item bg-light border">
                      <h3 className="display-5 fw-bold mb-1 text-success">C</h3>
                      <h6 className="mb-0">Colaboración</h6>
                    </div>
                    <div className="story-item bg-white border">
                      <h3 className="display-5 fw-bold mb-1 text-primary">I</h3>
                      <h6 className="mb-0">Integridad</h6>
                    </div>
                    <div className="story-item bg-white border">
                      <h3 className="display-5 fw-bold mb-1 text-dark">I</h3>
                      <h6 className="mb-0">Innovación</h6>
                    </div>
                    <div className="story-item bg-light border">
                      <h3 className="display-5 fw-bold mb-1 text-warning">C</h3>
                      <h6 className="mb-0">Compromiso</h6>
                    </div>
                    <div className="story-item bg-light border">
                      <h3 className="display-5 fw-bold mb-1 text-danger">L</h3>
                      <h6 className="mb-0">Liderazgo</h6>
                    </div>
                    <div className="story-item bg-white border">
                      <h3 className="display-5 fw-bold mb-1 text-primary">E</h3>
                      <h6 className="mb-0">Empatía</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*our story section end*/}

        {/*team section start*/}
        <section id="our-team" className="team-section ptb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="section-heading text-center">
                  <h5 className="h6 text-primary">Nuestros lideres</h5>
                  <h2>Las personas detrás de SwarmTech</h2>
                  <p>
                    Somos un equipo de tres perfiles muy distintos pero que se
                    logran complementar perfectamente para dirigir una empresa
                    confiable y eficiente.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="team-single-wrap mb-5">
                  <div className="team-img rounded-custom">
                    <Image
                      src={team1}
                      alt="team1"
                      className="img-fluid position-relative"
                    />
                    <ul className="list-unstyled team-social-list d-flex flex-column mb-0">
                      <li className="list-inline-item">
                        <Link
                          id="link"
                          href="https://mx.linkedin.com/company/swarmtech20 "
                        >
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          id="link"
                          href="https://www.tiktok.com/@swarmtech"
                        >
                          <i className="fab fa-tiktok" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          id="link"
                          href="https://www.instagram.com/swarmtech20/"
                        >
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          id="link"
                          href="https://www.facebook.com/swarmtech20/"
                        >
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="team-info mt-4 text-center">
                    <h5 className="h6 mb-1">Juan Ortega</h5>
                    <p className="text-muted small mb-0">Director Financiero</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team-single-wrap mb-5">
                  <div className="team-img rounded-custom">
                    <Image
                      src={team2}
                      alt="team2"
                      className="img-fluid position-relative"
                    />
                    <ul className="list-unstyled team-social-list d-flex flex-column mb-0">
                      <li className="list-inline-item">
                        <Link
                          id="link"
                          href="https://mx.linkedin.com/company/swarmtech20 "
                        >
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          id="link"
                          href="https://www.tiktok.com/@swarmtech"
                        >
                          <i className="fab fa-tiktok" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          id="link"
                          href="https://www.instagram.com/swarmtech20/"
                        >
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link href="https://www.facebook.com/swarmtech20/">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="team-info mt-4 text-center">
                    <h5 className="h6 mb-1">Jatziry Hernandez</h5>
                    <p className="text-muted small mb-0">
                      Directora de Relaciones Públicas
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team-single-wrap mb-5">
                  <div className="team-img rounded-custom">
                    <Image
                      src={team3}
                      alt="team3"
                      className="img-fluid position-relative"
                    />
                    <ul className="list-unstyled team-social-list d-flex flex-column mb-0">
                      <li className="list-inline-item">
                        <Link
                          id="link"
                          href="https://mx.linkedin.com/company/swarmtech20 "
                        >
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          id="link"
                          href="https://www.tiktok.com/@swarmtech"
                        >
                          <i className="fab fa-tiktok" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          id="link"
                          href="https://www.instagram.com/swarmtech20/"
                        >
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          id="link"
                          href="https://www.facebook.com/swarmtech20/"
                        >
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="team-info mt-4 text-center">
                    <h5 className="h6 mb-1">Gibran Porras</h5>
                    <p className="text-muted small mb-0">
                      Director de Proyectos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*team section end*/}
      </>
      <Footer />
    </div>
  );
};

export default Nosotros;
