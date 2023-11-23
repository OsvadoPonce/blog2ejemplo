import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import $ from "jquery";

import fondo1 from "../public/img/page-header-bg.svg";
import shape1 from "../public/img/shape/dot-big-square.svg";
import shape2 from "../public/img/shape/dot-big-square.svg";

const Precios = () => {
  useEffect(() => {
    $(document).ready(function () {
      $("#preloader").delay(100).fadeOut("fade");
    });
  }, []);
  return (
    <div>
      <Preloader />
      <Header />
      <>
        <section
          className="page-header position-relative overflow-hidden ptb-120 bg-dark"
          style={{ position: 'relative', overflow: 'hidden' }}
          >
            <Image
            src={fondo1}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <h1 className="display-5 fw-bold">
                  ¿Qué necesitas para tu empresa?
                </h1>
                <p className="lead">
                  Si tienes dudas o la solución que buscas no se encuentra en
                  los servicios mostrados en esta página no dudes en
                  contactarnos en Swarm Tech nos enfocamos en desarrollar todo
                  tipo de software con inteligencia artificial y para análisis
                  de datos.
                </p>
              </div>
            </div>
            <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5" />
          </div>
        </section>
        
        <section className="pricing-section ptb-120 position-relative z-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="position-relative single-pricing-wrap rounded-custom bg-white custom-shadow p-5 mb-4 mb-lg-0">
                  <div className="pricing-header mb-32">
                    <h3 className="package-name text-primary d-block">
                      DashBoard Web
                    </h3>
                    <h4 className="display-6 fw-semi-bold">
                      $1,750<span>/mes</span>
                    </h4>
                  </div>
                  <div className="pricing-info mb-4">
                    <ul className="pricing-feature-list list-unstyled">
                      <li>
                        <i className="fas fa-circle fa-2xs text-primary me-2" />{" "}
                        Sin plazo forzoso
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-primary me-2" />{" "}
                        Centralización de información
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-primary me-2" />{" "}
                        Base de datos
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-primary me-2" />{" "}
                        5 Infografías
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-primary me-2" />{" "}
                        5 Formularios
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-primary me-2" />{" "}
                        Digitalización de información
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-primary me-2" />{" "}
                        Acceso multiplataforma
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-primary me-2" />{" "}
                        Mantenimeinto
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-primary me-2" />{" "}
                        Gestión de usuarios (hasta 5)
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-primary me-2" />{" "}
                        Actualizaciones
                      </li>
                    </ul>
                  </div>
                  <Link id="link"
                    href="/Contactanos"
                    className="btn btn-outline-primary mt-2"
                  >
                    Comprar ahora
                  </Link>
                  {/*pattern start*/}
                  <div className="dot-shape-bg position-absolute z--1 left--40 bottom--40">
                    <Image
                      src={shape1}
                      alt="shape"
                    />
                  </div>
                  {/*pattern end*/}
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="position-relative single-pricing-wrap rounded-custom bg-dark text-white p-5 mb-4 mb-lg-0">
                  <div className="pricing-header mb-32">
                    <h3 className="package-name text-warning d-block">
                      DashBoard Web
                    </h3>
                    <h4 className="display-6 fw-semi-bold">
                      $1,500<span>/mes </span>
                    </h4>
                  </div>
                  <div className="pricing-info mb-4">
                    <ul className="pricing-feature-list list-unstyled">
                      <li>
                        <i className="fas fa-circle fa-2xs text-warning me-2" />{" "}
                        Contrato por 12 meses
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-warning me-2" />{" "}
                        Centralización de información
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-warning me-2" />{" "}
                        Base de datos
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-warning me-2" />{" "}
                        5 Infografías
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-warning me-2" />{" "}
                        5 Formularios
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-warning me-2" />{" "}
                        Digitalización de información
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-warning me-2" />{" "}
                        Acceso multiplataforma
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-warning me-2" />{" "}
                        Mantenimeinto
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-warning me-2" />{" "}
                        Gestión de usuarios (hasta 5)
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-warning me-2" />{" "}
                        Actualizaciones
                      </li>
                    </ul>
                  </div>
                  <Link id="link" href="/Contactanos" className="btn btn-primary mt-2">
                    Comprar ahora
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="position-relative single-pricing-wrap rounded-custom bg-white custom-shadow p-5 mb-4 mb-lg-0">
                  <div className="pricing-header mb-32">
                    <h3 className="package-name text-primary d-block">
                      DashBoard Desktop
                    </h3>
                    <h4 className="display-6 fw-semi-bold">Pide cotización</h4>
                  </div>
                  <div className="pricing-info mb-4">
                    <ul className="pricing-feature-list list-unstyled">
                      <li>
                        <i className="fas fa-circle fa-2xs text-primary me-2" />{" "}
                        Pago único
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-primary me-2" />{" "}
                        Centralización de información
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-primary me-2" />{" "}
                        Base de datos
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-primary me-2" />{" "}
                        5 Infografías{" "}
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-primary me-2" />{" "}
                        5 Formularios{" "}
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-primary me-2" />{" "}
                        Digitalización de información
                      </li>
                      <li>
                        <i className="fas fa-circle fa-2xs text-primary me-2" />{" "}
                        Instalación en una PC
                      </li>
                      <li className="text-decoration-line-through">
                        <i className="fas fa-circle fa-2xs text-primary me-2" />{" "}
                        Mantenimeinto
                      </li>
                      <li className="text-decoration-line-through">
                        <i className="fas fa-circle fa-2xs text-primary me-2" />{" "}
                        Gestión de usuarios (hasta 5){" "}
                      </li>
                      <li className="text-decoration-line-through">
                        <i className="fas fa-circle fa-2xs text-primary me-2" />{" "}
                        Actualizaciones
                      </li>
                    </ul>
                  </div>
                  <Link id="link"
                    href="/Contactanos"
                    className="btn btn-outline-primary mt-2"
                  >
                    Cotizar ahora
                  </Link>
                  {/*pattern start*/}
                  <div className="dot-shape-bg position-absolute z--1 right--40 top--40">
                    <Image
                      src={shape2}
                      alt="shape"
                    />
                  </div>
                  {/*pattern end*/}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <Footer />
    </div>
  );
};

export default Precios;
