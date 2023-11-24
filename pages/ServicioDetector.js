import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

import Header from "../components/Header";
import RegisterProyect from "../components/RegisterProyect";
import Footer2 from "../components/Footer2";
import Preloader from "../components/Preloader";
import $ from "jquery";

import fondo1 from "../public/img/page-header-bg.svg";
import shape1 from "../public/img/4.png";
import shape2 from "../public/img/object.jpeg";

const ServicioDetector = () => {
  useEffect(() => {
    $(document).ready(function () {
      $("#preloader").delay(100).fadeOut("fade");
    });
  }, []);
  return (
    <div>
      <Head>
        <title>SwarmTech</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
                <h1 className="display-5 fw-bold">Detector</h1>
                <p className="lead">
                  Este servicio es para desarrollar herramientas de software
                  para el conteo de objetos, para el pase de asistencia y para
                  la detección de incidentes.
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
                    Con ayuda de la IA esta herramienta te puede ayudar a
                    contabilizar el material que tienes en almacén, puede
                    agilizar el registro de asistencia o puede contar las
                    personas que se encuentran en un area determinada.
                  </p>
                </div>
                <ul className="list-unstyled d-flex flex-wrap list-two-col mt-5">
                  <li>
                    <span>
                      <i className="fas fa-user fa-2x text-primary mb-4" />
                    </span>
                    <h3 className="h5">Detección de incidentes</h3>
                    <p>
                      Se detectan de forma automatica accidentes en un area.
                    </p>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-watch fa-2x text-primary mb-4" />
                    </span>
                    <h3 className="h5">Reconocimiento Facial</h3>
                    <p>
                      Se puede reconocer el rostro de la persona para registrar
                      asistencia.{" "}
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
                  <h2>Por ejemplo, para la detección de incidentes</h2>
                  <p>
                    Se pueden utilizar distintas cámaras para monitorear un area
                    determinada y cuando algún empleado tenga un accidente
                    enviar una notificación a la persona correspondiente.{" "}
                  </p>
                </div>
                <ul className="list-unstyled d-flex flex-wrap list-two-col mt-5">
                  <li>
                    <span>
                      <i className="fas fa-comments-alt fa-2x text-primary mb-4" />
                    </span>
                    <h3 className="h5">Múltiples personas</h3>
                    <p>
                      Se pueden monitorear todas las personas en el area de la
                      cámara.
                    </p>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-headset fa-2x text-primary mb-4" />
                    </span>
                    <h3 className="h5">Líquidos derramados</h3>
                    <p>Se pueden detectar para prevenir accidentes. </p>
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
                    falta algún punto no dudes en contactarnos.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="promo-card-wrap promo-border-hover border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-4">
                  <div className="promo-card-info">
                    <h3 className="display-5 fw-medium mb-4">30+</h3>
                    <h2 className="h5">Fotografias</h2>
                    <p className="mb-0">
                      Se necesitas fotografías del objeto en distintas
                      perspectivas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="promo-card-wrap promo-border-hover border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-4">
                  <div className="promo-card-info">
                    <h3 className="display-5 fw-medium mb-4">1+</h3>
                    <h2 className="h5">Cámaras</h2>
                    <p className="mb-0">
                      Una cámara mínimo según las características del ambiente.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="promo-card-wrap promo-border-hover border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-0">
                  <div className="promo-card-info">
                    <h3 className="display-5 fw-medium mb-4">1+</h3>
                    <h2 className="h5">Computadoras</h2>
                    <p className="mb-0">
                      Para la de la herramienta de detección y almacenamiento
                      del video.{" "}
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

export default ServicioDetector;
