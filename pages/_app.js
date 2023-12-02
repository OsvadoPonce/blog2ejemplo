import { useEffect } from "react";
import "@/styles/custom.css";
import "@/styles/feature.css";
import "@/styles/Home.module.css";
import "@/styles/main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return <Component {...pageProps} />;
}
