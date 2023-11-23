import Link from "next/link";
import React from "react";
function Footer2() {
  return (
    <div>
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
                      <Link id="link" href="https://www.facebook.com/swarmtech20/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link id="link" href="https://www.instagram.com/swarmtech20/">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link id="link" href="https://mx.linkedin.com/company/swarmtech20 ">
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

export default Footer2;
