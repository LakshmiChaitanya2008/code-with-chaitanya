import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import styles from "../styles/posts.module.scss";
import { useEffect } from "react";
import hljs from "highlight.js";
import { useRouter } from "next/router";
import Head from "next/head";
const Post = function ({ content, data, slug }) {
  useEffect(() => hljs.highlightAll());
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="title" content={data.title} />
        <meta name="description" content={data.description} />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://code-with-chaitanya.vercel.app/${router.query.slug}`}
        />
        <meta property="og:image" content="/nebula.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://code-with-chaitanya.vercel.app/${router.query.slug}`}
        />
        <meta property="twitter:title" content={data.title} />
        <meta property="twitter:description" content={data.description} />
        <meta property="twitter:image" content="/nebula.jpg"></meta>
      </Head>
      <h1 className={styles.title}>{data.title}</h1>
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{
          __html: marked(content),
        }}
      ></div>
    </>
  );
};
export default Post;

export const getStaticPaths: GetStaticPaths = function () {
  let files = fs
    .readdirSync(path.join("posts"))
    .map((f) => {
      return f.replace(".md", "");
    })
    .map((f) => {
      return {
        params: {
          slug: f,
        },
      };
    });

  return {
    paths: files,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = function ({ params: { slug } }) {
  const markdownFile = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data, content } = matter(markdownFile);

  console.log(data, content);
  return {
    props: {
      data,
      content,
      slug,
    },
  };
};
