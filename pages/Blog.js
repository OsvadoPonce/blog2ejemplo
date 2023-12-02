import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "react-bootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

import Preloader from "../components/Preloader";
import $ from "jquery";

import { getAllFilesMetadata } from "@/lib/mdx";
import Index from ".";

const inter = Inter({ subsets: ["latin"] });

const Blog = ({ posts }) => {
  useEffect(() => {
    $(document).ready(function () {
      $("#preloader").delay(100).fadeOut("fade");
    });
  }, []);

  const width = 413.7;
  const height = 224;
  const widthA = 40;
  const heightA = 40;
  //Paginacion
  const postPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * postPerPage;
  const endIndex = startIndex + postPerPage;
  const visiblePost = posts.slice(startIndex, endIndex);

  return (
    <div>
      <Head>
        <title>SwarmTech</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Preloader />
      <Header />
      <section
        className="page-header position-relative overflow-hidden ptb-120 bg-dark"
        style={{
          backgroundImage: "url(/img/page-header-bg.svg)",
          backgroundPosition: "bottom left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row" >
            <div className="col-lg-8 col-md-12">
              <h1 className="display-5 fw-bold">SwarmTech Blog</h1>
              <p className="lead">
                Somos especialistas en Inteligencia Artificial
              </p>
            </div>
          </div>
          <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5" />
        </div>
      </section>
      <section className="blog-details ptb-120">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-heading text-center">
              <h4 className="h5 text-primary">Latest News</h4>
              <h2>Check our Latest Article</h2>
              <p>
                Dynamically pursue process improvements develop end-to-end
                customer service impactful action items and web-enabled markets.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="style-guide">
        <div className="bg-primary-soft ptb-60">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="style-guide-heading text-center">
                  <h2>Home Posts SwarmTech</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="masonary-blog-section ptb-60">
        <div className="container">
          <div className="row">
            {visiblePost.map((post) => (
              <div
                key={post.slug}
                className="col-lg-4 col-md-6"
              >
                <div className="single-article rounded-custom my-3">
                  <Link
                    id="link"
                    href={`/${post.slug}`}
                    className="article-img"
                  >
                    <Image
                      src={`/${post.imgPost}`}
                      width={width}
                      height={height}
                      alt="img-article"
                      className="img-fluid"
                    />
                  </Link>

                  <div className="article-content p-4">
                    <Link href={`/${post.slug}`}>
                      <h2 className="h3 article-title limit-2-line-text">
                        {post.title}
                      </h2>
                    </Link>
                    <Image
                      src={`/${post.image}`}
                      alt="img-author"
                      width={widthA}
                      height={heightA}
                      className="img-fluid shadow-sm rounded-circle"
                    />

                    <p className="limit-2-line-text">{post.excerpt}</p>

                    <Link href={`/${post.slug}`}>
                      <div className="d-flex align-items-center pt-4">
                        <div className="avatar-info">
                          <h6 className="mb-0 avatar-name">{post.author}</h6>
                          <span className="small fw-medium text-muted">
                            {post.date}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <div className="container">
        <div className="row justify-content-center align-items-center mt-3">
          <div className="col-auto my-1">
            {/* Enlace a la página anterior */}

            {currentPage > 1 && (
              <Button  className="btn-primary"
              onClick={() => setCurrentPage(currentPage - 1)}>
                Previous
              </Button>
            )}
          </div>
          <div className="col-auto my-1">
            <nav>
              <ul className="pagination rounded mb-0">
                {Array.from(
                  { length: Math.ceil(posts.length / postPerPage) },
                  (_, index) => (
                    <li
                      key={index + 1}
                      className={`page-item ${
                        index + 1 === currentPage ? "active" : ""
                      }`}
                    >
                      <Button variant="outline-secondary" 
                       onClick={() => setCurrentPage(index + 1)}>
                        {index + 1}
                      </Button>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
          <div className="col-auto my-1">
            {/* Enlace a la página siguiente */}
              {currentPage < Math.ceil(posts.length / postPerPage) && (
              <Button className="btn-primary" 
               onClick={() => setCurrentPage(currentPage + 1)}>
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();

  //console.log("Posts", posts);
  return {
    props: {
      posts,
    },
  };
}
