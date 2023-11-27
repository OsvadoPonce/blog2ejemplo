import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

import shape2 from "../public/img/SwarmLogo.png";

import Preloader from "../components/Preloader";
import $ from "jquery";

import { getAllFilesMetadata } from "@/lib/mdx";

const inter = Inter({ subsets: ["latin"] });

const Blog = ({ posts }) => {
  const postsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  useEffect(() => {
    $(document).ready(function () {
      $("#preloader").delay(100).fadeOut("fade");
    });
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Head>
        <title>SwarmTech</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Preloader />
      <Header />
      <main className="masonary-blog-section ptb-120">
        <div className="container">
          <div className="row">
            {currentPosts.map((post) => (
              <div key={post.slug} className="col-lg-4 col-md-6">
                <div className="single-article rounded-custom my-3">
                  <Link
                    id="link"
                    href={`/${post.slug}`}
                    className="article-img"
                  >
                    <Image src={shape2} alt="article" className="img-fluid" />
                  </Link>

                  <div className="article-content p-4">
                    <Link href={`/${post.slug}`}>
                      <h2 className="h3 article-title limit-2-line-text">
                        {post.title}
                      </h2>
                    </Link>
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
          <div className="row justify-content-center align-items-center mt-5">
            <div className="col-auto my-1">
              <a
                href="#"
                className="btn btn-soft-primary btn-sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </a>
            </div>
            <div className="col-auto my-1">
              <nav>
                <ul className="pagination rounded mb-0">
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <li
                      key={page}
                      className={`page-item ${page === currentPage ? 'active' : ''}`}
                    >
                      <a
                        className="page-link"
                        href="#"
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="col-auto my-1">
              <a
                href="#"
                className="btn btn-soft-primary btn-sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();

  return {
    props: {
      posts,
    },
  };
}
