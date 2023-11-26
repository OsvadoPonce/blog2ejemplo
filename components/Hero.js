import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import PagWeb from "../public/img/img  1 pag web .png";
import PagWeb2 from "../public/img/img 1.1 pag web.png";
import PagWeb21 from "../public/img/img 2.1 pag web.png";
import PagWeb20 from "../public/img/img 2 pasg web.png";
import PagWeb31 from "../public/img/Img 3.1 pag web.png";
import PagWeb30 from "../public/img/Img 3pag web.png";

import Link from "next/link";
import Hero2 from "../components/Hero2";
function Hero() {
  return (
    <div>
     <Hero2/>
      <section className="customer-review pb-120 bg-dark">
        <div className="container">
          <div className="row">
            <div className="section-heading text-center">
              <h2 className="fw-medium h2">Aplicaciones DashBoard</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="review-info-wrap text-center rounded-custom d-flex flex-column h-100 p-lg-5 p-4">
                <h3>Finanzas</h3>
                <div className="review-info-content mt-2">
                  <p className="mb-4">
                    Puedes monitorear los gastos por departamento, la
                    rentabilidad y cuentas por cobrar en tiempo real.
                  </p>
                </div>
                <Link id="link"
                  href="/ServiciosFinanzas"
                  className="link-with-icon p-0 mt-auto text-decoration-none text-warning"
                >
                  Leer más <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="review-info-wrap text-center rounded-custom d-flex flex-column h-100 p-lg-5 p-4">
                <h3>Almacén</h3>
                <div className="review-info-content mt-2">
                  <p className="mb-4">
                    Puedes monitorear el flujo de tus productos, desde almacén
                    hasta la venta al cliente.{" "}
                  </p>
                </div>
                <Link id="link"
                  href="/ServiciosAlmacen"
                  className="link-with-icon p-0 mt-auto text-decoration-none text-warning"
                >
                  Leer más <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="review-info-wrap text-center rounded-custom d-flex flex-column h-100 p-lg-5 p-4">
                <h3>Recursos Humanos</h3>
                <div className="review-info-content mt-2">
                  <p className="mb-4">
                    Puedes monitorear el ausentismo laboral, incidencias
                    mensuales y las metas de la semana por departamento.
                  </p>
                </div>
                <Link id="link"
                  href="/ServiciosRH"
                  className="link-with-icon p-0 mt-auto text-decoration-none text-warning"
                >
                  Leer más <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="image-feature ptb-120">
        <Container>
          <Row
            className="justify-content-between align-items-center"
            style={{
              display: "-webkit-box -ms-flexbox flex",
              WebkitBoxOrient: "horizontal",
              msFlexDirection: "row",
              flexDirection: "row",
              WebkitBoxWrap: "wrap",
              msFlexWrap: "wrap",
              flexWrap: "wrap",
              marginTop: "calc(var(--bs-gutter-y) * -1)",
              marginRight: "calc(var(--bs-gutter-x) / -2)",
              marginLeft: "calc(var(--bs-gutter-x) / -2)",
            }}
          >
            <Col lg={5} xs={12}>
              <div className="feature-img-content">
                <div className="section-heading" data-aos="fade-up">
                  <h2>Potencia los procesos de tu empresa</h2>
                  <p>
                    Contratando nuestro servicio de desarrollo de software
                    especializado para la toma de decisiones mediante
                    inteligencia artificial.{" "}
                  </p>
                </div>
                <ul
                  className="list-unstyled d-flex flex-wrap list-two-col mb-0"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <li>
                    <div className="icon-box">
                      <i className="fas fa-users text-white bg-primary rounded"></i>
                    </div>
                    <h3 className="h5">Análisis de preferencias</h3>
                    <p>
                      Producir objetivamente lo excepcional a través de la
                      personalización.
                    </p>
                  </li>
                  <li>
                    <div className="icon-box">
                      <i className="fas fa-fingerprint text-white bg-danger rounded"></i>
                    </div>
                    <h3 className="h5">Multiples Objetivos</h3>
                    <p>
                      Encuentre soluciones que ofrezcan una buena sinergia a
                      todos sus objetivos.
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <Container className="feature-img-holder p-lg-5 pt-3">
                <Container className="p-lg-5 p-3 bg-danger-soft position-relative rounded-custom d-block feature-img-wrap">
                  <Container className="z-10 position-relative">
                    <Image
                      src={PagWeb}
                      className="img-fluid rounded-custom position-relative"
                      alt="feature-image"
                      data-aos="fade-up"
                      data-aos-delay="50"
                    />
                    <Image
                      src={PagWeb2}
                      className="img-fluid rounded-custom shadow position-absolute bottom--100 right--100 hide-medium"
                      alt="feature-image"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    />
                  </Container>
                  <Container className="position-absolute bg-dark-soft z--1 dot-mask dm-size-12 dm-wh-250 top-left"></Container>
                </Container>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="image-feature pt-60 pb-120">
        <Container>
          <Row className="row justify-content-between align-items-center">
            <Col lg={5} xs={12} className="order-lg-1">
              <div className="feature-img-content">
                <div className="section-heading" data-aos="fade-up">
                  <h2>Mida su eficiencia para los negocios</h2>
                  <p>
                    Nuestro DashBoard es una herramienta para la recopilación,
                    el análisis y la visualización de datos. Además permite
                    generar reportes estadísticos con infografías listas para
                    los reportes de resultados.
                  </p>
                </div>
                <ul
                  className="list-unstyled d-flex flex-wrap list-two-col mb-0"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <li>
                    <div className="icon-box">
                      <i className="fas fa-dollar-sign text-white bg-success rounded"></i>
                    </div>
                    <h3 className="h5">Finanzas</h3>
                    <p>Evalúa en tiempo real la proyección de tus finanzas.</p>
                  </li>
                  <li>
                    <div className="icon-box">
                      <i className="fas fa-headset text-white bg-dark rounded"></i>
                    </div>
                    <h3 className="h5">Monitoreo de objetivos</h3>
                    <p>
                      Información simplificada para tomar decisiones al
                      instante.
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6} xs={12} className="order-lg-0">
              <Container className="feature-img-holder p-lg-5 pt-3">
                <Container className="bg-primary-soft p-lg-5 p-3 rounded-custom position-relative d-block feature-img-wrap">
                  <Container className="z-10 position-relative">
                    <Image
                      src={PagWeb21}
                      className="img-fluid rounded-custom position-relative"
                      alt="feature-image"
                      data-aos="fade-up"
                      data-aos-delay="50"
                    />
                    <Image
                      src={PagWeb20}
                      className="img-fluid rounded-custom shadow position-absolute top--100 left--100 hide-medium"
                      alt="feature-image"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    />
                  </Container>
                  <Container className="position-absolute bg-dark-soft z--1 dot-mask dm-size-12 dm-wh-250 bottom-right" />
                </Container>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="image-feature pt-60 pb-120">
        <Container>
          <Row className="row justify-content-between align-items-center">
            <Col lg={5} xs={12} className="order-lg-1">
              <Container className="feature-img-holder p-lg-5 pt-3">
                <Container className="bg-primary-soft p-lg-5 p-3 rounded-custom position-relative d-block feature-img-wrap">
                  <Container className="z-10 position-relative">
                    <Image
                      src={PagWeb31}
                      className="img-fluid rounded-custom position-relative"
                      alt="feature-image"
                      data-aos="fade-up"
                      data-aos-delay="50"
                    />
                    <Image
                      src={PagWeb30}
                      className="img-fluid rounded-custom shadow position-absolute top--100 left--100 hide-medium"
                      alt="feature-image"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    />
                  </Container>
                  <Container className="position-absolute bg-dark-soft z--1 dot-mask dm-size-12 dm-wh-250 bottom-right" />
                </Container>
              </Container>
            </Col>
            <Col lg={6} xs={12} className="order-lg-0">
              <div className="feature-img-content">
                <div className="section-heading" data-aos="fade-up">
                  <h2>Creamos software y productos digitales</h2>
                  <p>
                    En SwarmTech desarrollamos herramientas tecnológicas, con el
                    objetivo de que la industria se beneficie de la Inteligencia
                    Artificial para solucionar sus problemas.
                  </p>
                </div>
                <ul
                  className="list-unstyled d-flex flex-wrap list-two-col mt-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <li>
                    <div className="icon-box">
                      <i className="fas fa-briefcase text-white bg-warning rounded"></i>
                    </div>
                    <h3 className="h5">Inteligencia Artificial</h3>
                    <p>
                      Nos especializamos en el uso de algoritmos Bio-inspirados.
                    </p>
                  </li>
                  <li>
                    <div className="icon-box">
                      <i className="fas fa-truck text-white bg-info rounded"></i>
                    </div>
                    <h3 className="h5">Análisis de Datos</h3>
                    <p>
                      Te apoyamos desde la digitalización de tu información{" "}
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
export default Hero;