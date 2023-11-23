import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <div>
      <section className="cta-subscribe bg-dark text-white ptb-120 position-relative overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="subscribe-info-wrap text-center position-relative z-2">
                <div className="section-heading" data-aos="fade-up">
                  <h4 className="h5 text-warning">
                    Adopta la cultura data driven{" "}
                  </h4>
                  <h2>¿Te interesa un servicio de inteligencia artificial?</h2>
                  <p>Nosotros te podemos ayudar. Contáctanos</p>
                </div>
                <div
                  className="form-block-banner mw-60 m-auto mt-5"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <Link
                    id="link"
                    href="/Contactanos"
                    className="btn btn-primary"
                  >
                    Contactar con nosotros
                  </Link>
                </div>
                <ul
                  className="nav justify-content-center subscribe-feature-list mt-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <li className="nav-item">
                    <span>
                      <i className="far fa-check-circle text-primary me-2"></i>
                      Inteligencia Artificial
                    </span>
                  </li>
                  <li className="nav-item">
                    <span>
                      <i className="far fa-check-circle text-primary me-2"></i>
                      Visualización de datos
                    </span>
                  </li>
                  <li className="nav-item">
                    <span>
                      <i className="far fa-check-circle text-primary me-2"></i>
                      Analisis de datos
                    </span>
                  </li>
                  <li className="nav-item">
                    <span>
                      <i className="far fa-check-circle text-primary me-2"></i>
                      Optimización de procesos{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div>
          <div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5"></div>
        </div>
      </section>
      <footer className="footer-section">
        <div className="footer-bottom footer-light py-4">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-7 col-lg-7">
                <div className="copyright-text"></div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="footer-single-col text-start text-lg-end text-md-end">
                  <ul className="list-unstyled list-inline footer-social-list mb-0">
                    <li className="list-inline-item">
                      <Link
                        id="link"
                        href="https://www.facebook.com/swarmtech20/"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        id="link"
                        href="https://www.instagram.com/swarmtech20/"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        id="link"
                        href="https://mx.linkedin.com/company/swarmtech20 "
                      >
                        <i className="fab fa-linkedin"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link id="link" href="https://www.tiktok.com/@swarmtech">
                        <i className="fab fa-tiktok"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
