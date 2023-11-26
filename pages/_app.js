//import '@/styles/globals.css'
import { useEffect } from "react";
import "@/styles/feature.css"
import "@/styles/custom.css"
import "@/styles/main.css"
import '@fortawesome/fontawesome-free/css/all.css';
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
  return <Component {...pageProps} />
}
