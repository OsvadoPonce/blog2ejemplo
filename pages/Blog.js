import React, { useEffect } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

import shape2 from "../public/img/blog/blog-2.jpg"

import Preloader from "../components/Preloader";
import $ from "jquery";

import { getAllFilesMetadata } from "@/lib/mdx";

const inter = Inter({ subsets: ["latin"] });

const Blog = ({ posts }) => {
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
      <main className="masonary-blog-section ptb-120">
        <div className="container">
          <div className="row">
            {posts.map((post) => (
              <div key={post.slug} className="col-lg-4 col-md-6">
                <div className="single-article rounded-custom my-3">
                  <Link id="link" href={`/${post.slug}`} className="article-img">
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
