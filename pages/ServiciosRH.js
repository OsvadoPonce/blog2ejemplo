import React, { useEffect } from "react";
import Image from "next/image";

import Header from "../components/Header";
import RegisterProyect from "../components/RegisterProyect";
import Footer2 from "../components/Footer2";
import Preloader from "../components/Preloader";
import $ from "jquery";

import fondo1 from "../public/img/page-header-bg.svg";
import shape1 from "../public/img/1280X965.png";
import shape2 from "../public/img/RH.png";

const ServiciosRH = () => {
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
                <h1 className="display-5 fw-bold">DashBoard para RH</h1>
                <p className="lead">
                  Puedes monitorear el ausentismo laboral, incidencias mensuales
                  y las metas de la semana por departamento.
                </p>
              </div>
            </div>
            <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5" />
          </div>
        </section>

        <section className="feature-section ptb-120">
          <div className="container">
            <div className="row align-items-lg-center justify-content-between">
              <div className="col-lg-5 order-lg-2 mb-7 mb-lg-0">
                <div className="mb-4">
                  <h2>Genera reportes estadísticos </h2>
                  <p>
                    Con infografías listas para los reportes de resultados.
                    También, puedes observer de forma rápida como están
                    avanzando las metas de la semana.
                  </p>
                </div>
                <ul className="list-unstyled d-flex flex-wrap list-two-col mt-5">
                  <li>
                    <span>
                      <i className="fas fa-user fa-2x text-primary mb-4" />
                    </span>
                    <h3 className="h5">Empleados</h3>
                    <p>
                      Puedes visualizar características generales de los
                      empleados
                    </p>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-watch fa-2x text-primary mb-4" />
                    </span>
                    <h3 className="h5">Nomina</h3>
                    <p>
                      Monitorea la distribución de tu nomina por departamentos.{" "}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="pr-lg-4 mt-md-4 position-relative">
                  <div className="bg-light text-center rounded-custom overflow-hidden p-lg-5 p-4 mx-lg-auto">
                    <Image
                      src={shape1}
                      alt=""
                      className="img-fluid shadow-sm rounded-custom"
                    />
                    <div className="position-absolute bg-secondary-dark z--1 dot-mask dm-size-16 dm-wh-350 top--40 left--40 top-left" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-section pt-60 pb-120">
          <div className="container">
            <div className="row align-items-lg-center justify-content-between">
              <div className="col-lg-5 order-lg-1 mb-7 mb-lg-0">
                <div className="mb-4">
                  <h2>Comienza a recolectar los datos</h2>
                  <p>
                    Para por ejemplo, poder predecir cuándo ocurrirá un
                    accidente. También se podría saber cuándo faltara o
                    renunciara un empleado.
                  </p>
                </div>
                <ul className="list-unstyled d-flex flex-wrap list-two-col mt-5">
                  <li>
                    <span>
                      <i className="fas fa-comments-alt fa-2x text-primary mb-4" />
                    </span>
                    <h3 className="h5">Ausentismo</h3>
                    <p>
                      Conoce con anticipación las personas que faltaran al día.
                    </p>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-headset fa-2x text-primary mb-4" />
                    </span>
                    <h3 className="h5">Tipo de empleado</h3>
                    <p>
                      Conoce el perfil de empleado que necesitas para cada
                      puesto.{" "}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 order-lg-2">
                <div className="pr-lg-4 position-relative">
                  <div className="bg-light text-center rounded-custom overflow-hidden p-lg-5 p-4 mx-lg-auto">
                    <Image
                      src={shape2}
                      alt=""
                      className="img-fluid rounded-custom shadow-sm"
                    />
                    <div className="position-absolute bg-secondary-dark z--1 dot-mask dm-size-16 dm-wh-350 bottom--40 right--40 bottom-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="promo-section ptb-120 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6">
                <div className="section-heading text-center">
                  <h2>Toda decisión necesita datos</h2>
                  <p>
                    Con el Dash Board te ayudamos a recolectar y centralizar
                    esos datos que necesitas para dirigir el rumbo de tu empresa
                    por el camino más adecuado.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="promo-card-wrap promo-border-hover border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-4">
                  <div className="promo-card-info">
                    <h3 className="display-5 fw-medium mb-4">5 o más</h3>
                    <h2 className="h5">Infografías</h2>
                    <p className="mb-0">
                      Para centralizar la información y solo “echando un
                      vistazo" tomes una decision.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="promo-card-wrap promo-border-hover border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-4">
                  <div className="promo-card-info">
                    <h3 className="display-5 fw-medium mb-4">5 o más</h3>
                    <h2 className="h5">Fuentes de Datos</h2>
                    <p className="mb-0">
                      Podemos centralizar todos los lugares en donde tengas
                      información almacenada.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="promo-card-wrap promo-border-hover border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-0">
                  <div className="promo-card-info">
                    <h3 className="display-5 fw-medium mb-4">5 o más</h3>
                    <h2 className="h5">Formularios</h2>
                    <p className="mb-0">
                      Para que puedas comenzar a digitalizar la información que
                      aun tienes en papel.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <RegisterProyect />
      <Footer2 />
    </div>
  );
};

export default ServiciosRH;
