import React from "react";
import Header from "../components/Header";
import Footer2 from "../components/Footer2";

import imgBackgroud1 from "../public/img/page-header-bg.svg";
import shape1 from "../public/img/shape/contact-us-bg.svg";

import contactUs from "../public/img/contact-us-img-1.svg";
import Link from "next/link";
import Image from "next/image";

const Contactanos = () => {
  return (
    <div>
      <Header />
      <>
        <section
          className="page-header position-relative overflow-hidden ptb-120 bg-dark"
          style={{
            background: `url(${imgBackgroud1})`,
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <h1 className="display-5 fw-bold">Contactanos</h1>
                <p className="lead">
                  Cuantanos sobre el proyecto que tienes en mente y nosotros nos
                  encargamos de hacerlo relaidad con Inteligencia Artificial
                </p>
              </div>
            </div>
            <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5" />
          </div>
        </section>

        <section className="contact-promo ptb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
                  <span className="fad fa-comment-alt-lines fa-3x text-primary" />
                  <div className="contact-promo-info mb-4">
                    <h5>Mandanos un mensaje</h5>
                    <p>
                      Tenemos expertos esperando para ayudarte de{" "}
                      <strong>lunes a viernes</strong> de
                      <strong>9am to 5pm</strong>
                    </p>
                  </div>
                  <Link id="link"
                    href="https://www.facebook.com/swarmtech20/"
                    className="btn btn-link mt-auto"
                  >
                    mensajea con nosotros
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
                  <span className="fad fa-envelope fa-3x text-primary" />
                  <div className="contact-promo-info mb-4">
                    <h5>Envianos un mail</h5>
                    <p>
                      Simplemente envíanos un correo electrónico a{" "}
                      <strong>ventas@swarmtech.com.mx</strong>y recibirás una
                      respuesta en 24 horas
                    </p>
                  </div>
                  <Link id="link"
                    href="mailto:ventas@swarmtech.com.mx"
                    className="btn btn-primary mt-auto"
                  >
                    Email Us
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
                  <span className="fad fa-phone fa-3x text-primary" />
                  <div className="contact-promo-info mb-4">
                    <h5>Llámanos</h5>
                    <p>
                      Llámanos, nuestros expertos están a su disposición{" "}
                      <strong>lunes a viernes</strong> de
                      <strong>9am to 5pm</strong>
                    </p>
                  </div>
                  <Link id="link" href="tel:6567769353" className="btn btn-link mt-auto">
                    6567769353
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="contact-us-form pt-60 pb-120"
          style={{
            background: `url(${shape1})`,
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row justify-content-lg-between align-items-center">
              <div className="col-lg-6 col-md-8">
                <div className="section-heading">
                  <h2>Habla con nuestro equipo del Departamento de Ventas</h2>
                  <p>
                    Soluciones únicas para todas tus necesidades comerciales.
                  </p>
                </div>
                <form
                  action="https://formsubmit.co/6eb527725240c0cac79d680d469d3cc0"
                  method="POST"
                  className="register-form"
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="mb-1">
                        Nombre <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="name"
                          required=""
                          placeholder="First name"
                          aria-label="First name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 ">
                      <label htmlFor="lastName" className="mb-1">
                        Apellido
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          name="apellido"
                          className="form-control"
                          id="lastName"
                          placeholder="Last name"
                          aria-label="Last name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="phone" className="mb-1">
                        Telefono{" "}
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          name="telefono"
                          className="form-control"
                          id="phone"
                          placeholder="Telefono"
                          aria-label="Phone"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="email" className="mb-1">
                        Email<span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="email"
                          required=""
                          placeholder="Email"
                          aria-label="Email"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourMessage" className="mb-1">
                        Mensaje <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <textarea
                          className="form-control"
                          name="mensaje"
                          id="yourMessage"
                          required=""
                          placeholder="¿Cómo podemos ayudarte?"
                          style={{ height: 120 }}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mt-4">
                    Enviar
                  </button>
                  <input type="hidden" name="_captcha" defaultValue="false" />
                  <input
                    type="hidden"
                    name="_next"
                    defaultValue="www.swarmtech.com.mx/"
                  />
                </form>
              </div>
              <div className="col-lg-5 col-md-10">
                <div className="contact-us-img">
                  <Image
                    src={contactUs}
                    alt="contact us"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <Footer2 />
    </div>
  );
};

export default Contactanos;
