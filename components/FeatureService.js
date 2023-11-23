import React from "react";
import { Container, Row } from "react-bootstrap";
import Link from "next/link";

function FeatureService() {
  return (
    <section className="feature-section ptb-120  bg-light">
      <Container>
        <Row className="justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-heading text-center" data-aos="fade-up">
              <h2>Servicios que aumentan el valor de tu negocio</h2>
              <p>Algoritmos enfocados en maximizar los recursos.</p>
            </div>
          </div>
        </Row>
        <div className="row">
          <div className="col-12">
            <div className="feature-grid">
              <div
                className="feature-card bg-white   shadow-sm highlight-card rounded-custom p-5"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <div className="icon-box d-inline-block rounded-circle bg-primary-soft mb-32">
                  <i className="fal fa-analytics icon-sm text-primary"></i>
                </div>
                <div className="feature-content">
                  <h3 className="h5">DashBoard</h3>
                  <p>
                    Con este producto puedes agilizar la toma de decisiones y
                    monitorear los indicadores de la empresa.
                  </p>
                  <p>
                    {" "}
                    Enfocándose en la centralización de la información para
                    crear visualizaciones ágiles y sencillas.
                  </p>
                  <h6 className="mt-4">Incluye</h6>
                  <ul className="list-unstyled mb-0">
                    <li className="py-1">
                      <i className="fad fa-check-circle me-2 text-primary"></i>
                      Centralización de información
                    </li>
                    <li className="py-1">
                      <i className="fad fa-check-circle me-2 text-primary"></i>5
                      infografías
                    </li>
                    <li className="py-1">
                      <i className="fad fa-check-circle me-2 text-primary"></i>5
                      formularios
                    </li>
                    <li className="py-1">
                      <i className="fad fa-check-circle me-2 text-primary"></i>
                      Digitalización de información
                    </li>
                    <li className="py-1">
                      <i className="fad fa-check-circle me-2 text-primary"></i>
                      Acceso multiplataforma
                    </li>
                    <li className="py-1">
                      <i className="fad fa-check-circle me-2 text-primary"></i>
                      Almacenamiento de los datos
                    </li>
                  </ul>
                </div>
                <Link id="link"
                  href="/ServicioAnalitico"
                  className="link-with-icon text-decoration-none mt-3"
                >
                  Ver detalles <i className="far fa-arrow-right"></i>
                </Link>
              </div>
              <div
                className="feature-card bg-white   shadow-sm rounded-custom p-5"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <div className="icon-box d-inline-block rounded-circle bg-success-soft mb-32">
                  <i className="fal fa-file-chart-line icon-sm text-success"></i>
                </div>
                <div className="feature-content">
                  <h3 className="h5">SCHEDULER</h3>
                  <p className="mb-0">
                    Herramienta para sugerir el plan de tareas a realizar.
                  </p>
                </div>
                <Link id="link"
                  href="/ServicioScheduler"
                  className="link-with-icon text-decoration-none mt-3"
                >
                  Ver detalles <i className="far fa-arrow-right"></i>
                </Link>
              </div>
              <div
                className="feature-card bg-white   shadow-sm rounded-custom p-5"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <div className="icon-box d-inline-block rounded-circle bg-danger-soft mb-32">
                  <i className="fal fa-user-friends icon-sm text-danger"></i>
                </div>
                <div className="feature-content">
                  <h3 className="h5">VRP</h3>
                  <p className="mb-0">
                    Herramienta para la gestión de rutas de reparto de
                    productos.
                  </p>
                </div>
                <Link id="link"
                  href="/ServicioVRP"
                  className="link-with-icon text-decoration-none mt-3"
                >
                  Ver detalles <i className="far fa-arrow-right"></i>
                </Link>
              </div>
              <div
                className="feature-card bg-white   shadow-sm rounded-custom p-5"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <div className="icon-box d-inline-block rounded-circle bg-dark-soft mb-32">
                  <i className="fal fa-spell-check icon-sm text-dark"></i>
                </div>
                <div className="feature-content">
                  <h3 className="h5">ORDER PICKING</h3>
                  <p className="mb-0">
                    Herramienta que sugiere rutas de como recolectar el material
                    para producción.
                  </p>
                </div>
                <Link id="link"
                  href="/ServicioPicking"
                  className="link-with-icon text-decoration-none mt-3"
                >
                  Ver detalles <i className="far fa-arrow-right"></i>
                </Link>
              </div>
              <div
                className="feature-card bg-white   shadow-sm rounded-custom p-5"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <div className="icon-box d-inline-block rounded-circle bg-warning-soft mb-32">
                  <i className="fal fa-cog icon-sm text-warning"></i>
                </div>
                <div className="feature-content">
                  <h3 className="h5">DETECTOR</h3>
                  <p className="mb-0">
                    Herramienta para la supervisión, autenticación y conteo de
                    objetos.
                  </p>
                </div>
                <Link id="link"
                  href="/ServicioDetector"
                  className="link-with-icon text-decoration-none mt-3"
                >
                  Ver detalles <i className="far fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FeatureService;
