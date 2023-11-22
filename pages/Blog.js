import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

import { getAllFilesMetadata } from "@/lib/mdx";

const inter = Inter({ subsets: ["latin"] });

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>BLOG JAMSTACK</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.grid}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className={styles.card}
            >
              <h2>
                {post.title} <span>-&gt;</span>
              </h2>
              <p>Publicado el {post.date} por {post.author}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();

  return {
    props: {
      posts,
    },
  };
}
