import React, { useState } from "react";
import logo from "../public/img/Swarm-3.png";
import { Container, Navbar } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <header className="main-header w-100">
      <Navbar expand="xl" bg="light" sticky="header">
        <Container className="d-flex align-items-center justify-content-lg-between position-relative">
          <Navbar.Brand>
            <Link
              id="link"
              href="/"
              className="d-flex align-items-center mb-md-0 text-decoration-none"
            >
              <Image
                src={logo}
                width="113"
                height="36"
                alt="logo"
                className="img-fluid logo-color"
              />
            </Link>
          </Navbar.Brand>

          <Link
            id="link"
            href="#"
            className="navbar-toggler position-absolute right-0 border-0 "
            onClick={handleOffcanvas}
          >
            <span className="far fa-bars"></span>
          </Link>

          <div className="clearfix"></div>

          <div className="collapse navbar-collapse justify-content-center">
            <ul className="nav col-12 col-md-auto justify-content-center main-menu">
              <li>
                <Link id="link" href="/" className="nav-link">
                  Inicio
                </Link>
              </li>
              <li>
                <Link id="link" href="/Services" className="nav-link">
                    Servicios
                </Link>
              </li>
              <li>
                <Link id="link" href="/Precios" className="nav-link">
                    Precios
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link id="link" href="/Nosotros" className="nav-link">
                    Sobre nosotros
                </Link>
                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                  <div className="dropdown-grid rounded-custom width-full"></div>
                </div>
              </li>
            </ul>
          </div>

          <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
            <Link id="link" href="/Blog" className="btn btn-primary">
                Swarm Blog
            </Link>
          </div>

          {showOffcanvas && (
            <div className="offcanvas-wrapper">
              <div
                className="offcanvas-overlay"
                onClick={handleOffcanvas}
              ></div>
              <div className="offcanvas-content">
                <Link
                  id="link"
                  href="#"
                  className="d-flex align-items-center mb-md-0 text-decoration-none"
                >
                  <Image src={logo} alt="logo" className="img-fluid ps-2" />
                </Link>
                <button
                  type="button"
                  className="close-btn text-danger"
                  onClick={handleOffcanvas}
                >
                  <i className="far fa-close"></i>
                </button>
                <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                  <li>
                    <Link id="link" href="/" className="nav-link">
                        Inicio
                    </Link>
                  </li>
                  <li>
                    <Link id="link" href="/Services" className="nav-link">
                        Servicios
                    </Link>
                  </li>
                  <li>
                    <Link id="link" href="/Precios" className="nav-link">
                      Precios
                    </Link>
                  </li>
                  <li>
                    <Link id="link" href="/Nosotros" className="nav-link">
                        Sobre nosotros
                    </Link>
                  </li>
                </ul>
                <div className="action-btns mt-4 ps-3">
                  <Link id="link" href="/Blog" className="btn btn-primary">
                    Swarm Blog
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
