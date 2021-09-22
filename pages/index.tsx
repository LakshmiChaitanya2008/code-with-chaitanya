import { GetStaticProps } from "next";
const fs = require("fs");
const path = require("path");
import Link from "next/link";
import Head from "next/head";
import matter from "gray-matter";
import Posts from "../components/Posts";

const Home = function ({ posts }) {
  return (
    <div>
      <Head>
        <title>Code With Chaitanya</title>
        <meta name="title" content="Code with chaitanya" />
        <meta
          name="description"
          content="Code with chaitanya is a blog for people who want to learn frontend development in a fun way. "
        />
        <meta name="keywords" content="javascript, blog, code-with-chaitanya" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Lakshmi Chaitanya" />
      </Head>
      <h2 className="sub-title">Recent Blog Posts</h2>

      <Posts posts={posts} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = function () {
  let files: string[] = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownFile = fs.readFileSync(path.join("posts", filename), "utf-8");

    const { content, data } = matter(markdownFile);

    return {
      slug,
      data,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export const config = {
  unstable_runtimeJS: false,
};
