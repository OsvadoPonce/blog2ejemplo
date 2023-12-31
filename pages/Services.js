import React, { useEffect } from "react";
import Head from "next/head";
import FeatureService from "../components/FeatureService";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import $ from "jquery";

const Servicios = () => {
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
          style={{
            backgroundImage: "url(/img/page-header-bg.svg)",
            backgroundPosition: "bottom left",
            backgroundRepeat: "no-repeat",
          }}>

          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
              <h1 className="display-5 fw-bold">Somos especialistas en Inteligencia Artificial</h1>
                <p className="lead">
                  Nos encargamos de utilizar los avances que hay en la ciencia
                  sobre IA para ayudar a construir una industria y agricultura
                  sustentable.
                </p>
              </div>
            </div>
            <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5" />
          </div>
        </section>
      </>
      <FeatureService />
      <Footer />
    </div>
  );
};

export default Servicios;
