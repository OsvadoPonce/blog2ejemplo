import React from "react";
import Image from "next/image";
import abeja from "../public/img/abeja.png";

function Preloader() {
  return (
    <>
      <div id="preloader">
        <div className="preloader-wrap">
          <Image
            src={abeja}
            alt="logo"
            width={100} // ajusta el ancho según tus necesidades
            height={100} // ajusta la altura según tus necesidades
            className="img-fluid preloader-icon"
          />
          <div className="loading-bar"></div>
        </div>
      </div>
    </>
  );
}
export default Preloader;