import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer2";
import Preloader from "./Preloader";
import $ from "jquery";

export const MdxPage = ({ children }) => {
  useEffect(() => {
    $(document).ready(function () {
      $("#preloader").delay(100).fadeOut("fade");
    });
  }, []);
  return (
    <div className="mdx-page">
      <Preloader />
      <Header/>
      {children}
      <style jsx>{`
        .mdx-page {
          background-color: black;
          color: white;
        }
      `}</style>
      <Footer/>
    </div>
  );
};

