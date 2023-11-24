import React, { useEffect } from "react";
import $ from "jquery";
import Head from "next/head";

import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatureService from "../components/FeatureService";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    $(document).ready(function () {
      $("#preloader").delay(100).fadeOut("fade");
    });

    $('ul.nav li.dropdown').hover(function () {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
    }, function () {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
    });

    $(document).on('scroll', function () {
      var scroll = $(document).scrollTop();
      if (scroll < 2) {
        $('nav.sticky-header').removeClass('affix');
      } else {
        $('nav.sticky-header').addClass('affix');
      }
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
      <Hero />
      <FeatureService />
      <Footer />
    </div>
  );
}

export default Index;
