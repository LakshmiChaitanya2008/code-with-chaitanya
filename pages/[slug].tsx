import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import styles from "../styles/posts.module.scss";
import { useEffect } from "react";
import hljs from "highlight.js";
import Head from "next/head";
const Post = function ({ content, data }) {
  useEffect(() => hljs.highlightAll());

  return (
    <>
      <Head>
        <title>{data.title}</title>
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
    },
  };
};
