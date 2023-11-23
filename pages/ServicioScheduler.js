import React, { useEffect } from "react";
import Image from "next/image";

import Header from "../components/Header";
import RegisterProyect from "../components/RegisterProyect";
import Footer2 from "../components/Footer2";
import Preloader from "../components/Preloader";
import $ from "jquery";

import fondo1 from "../public/img/page-header-bg.svg";
import shape1 from "../public/img/scheduleravion.jpeg";
import shape2 from "../public/img/schedulercamion.jpeg";

const ServiciosScheduler = () => {
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
          style={{
            background: `url(${fondo1})`,
            backgroundPosition: "bottom left",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <h1 className="display-5 fw-bold">Scheduler</h1>
                <p className="lead">
                  Servicio para desarrollar herramientas de software que te
                  ayuden a realizar la planeación de las tareas para ahorrar
                  recursos en la producción.
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
                  <h2>¿Qué se puede hacer con esta herramienta?</h2>
                  <p>
                    Con ayuda de la IA el Scheduler te hace sugerencias de cómo
                    asignar las tareas a las máquinas para iniciar el proceso de
                    producción.{" "}
                  </p>
                </div>
                <ul className="list-unstyled d-flex flex-wrap list-two-col mt-5">
                  <li>
                    <span>
                      <i className="fal fa-user fa-2x text-primary mb-4" />
                    </span>
                    <h3 className="h5">Riesgo</h3>
                    <p>
                      Ayuda a disminuir el riesgo de que una tarea quede
                      incompleta.
                    </p>
                  </li>
                  <li>
                    <span>
                      <i className="fal fa-watch fa-2x text-primary mb-4" />
                    </span>
                    <h3 className="h5">Tiempo</h3>
                    <p>
                      Ayuda a reducir el tiempo para la realización de cada
                      tarea.{" "}
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
                  <h2>Por ejemplo, para la industria transportista</h2>
                  <p>
                    El scheduler te brinda distintas soluciones de cuales viajes
                    debes asignarle a cada operador para que estos sean
                    finalizados teniendo en cuenta distintos objetivos como:{" "}
                  </p>
                </div>
                <ul className="list-unstyled d-flex flex-wrap list-two-col mt-5">
                  <li>
                    <span>
                      <i className="fal fa-comments-alt fa-2x text-primary mb-4" />
                    </span>
                    <h3 className="h5">Retrasos por revisión</h3>
                    <p>
                      Se asigna el viaje a quien tenga menos casos de revisión.
                    </p>
                  </li>
                  <li>
                    <span>
                      <i className="fal fa-headset fa-2x text-primary mb-4" />
                    </span>
                    <h3 className="h5">Utilizar menos vehículos</h3>
                    <p>Se pede aumentar la cantidad de viajes por vehículo. </p>
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
                  <h2>¿Qué necesito para comenzar?</h2>
                  <p>
                    SwarmTech te ayuda de principio a fin para aprovechar las
                    tecnologías que ofrece la inteligencia artificial, si te
                    falta algún punto no dudes en contactarnos.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="promo-card-wrap promo-border-hover border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-4">
                  <div className="promo-card-info">
                    <h3 className="display-5 fw-medium mb-4">1 año</h3>
                    <h2 className="h5">Historial de datos</h2>
                    <p className="mb-0">
                      Necesitas tener información sobre todo lo que influye en
                      el proceso.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="promo-card-wrap promo-border-hover border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-4">
                  <div className="promo-card-info">
                    <h3 className="display-5 fw-medium mb-4">1+</h3>
                    <h2 className="h5">Metodología</h2>
                    <p className="mb-0">
                      Se necesita un formato con los pasos para realizar la
                      actividad
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="promo-card-wrap promo-border-hover border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-0">
                  <div className="promo-card-info">
                    <h3 className="display-5 fw-medium mb-4">5+</h3>
                    <h2 className="h5">Máquinas o tareas</h2>
                    <p className="mb-0">
                      Entre mayor sea el problema mejor se aprecian los
                      beneficios de la herramienta.{" "}
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

export default ServiciosScheduler;
