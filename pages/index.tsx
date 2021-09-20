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
        <meta title="Learn about web development!"></meta>
        <meta
          property="og:image"
          content="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/07/what-is-javascript-1280x720.jpg"
        />
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
