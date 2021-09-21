---
title: Start blogging with Next.js
description: Let's create a blog with next.js and marked.js
---

Have you ever wanted to make a blog? If yes, you have come to the right place. Let's create a blog with Next.js and marked. We will not be going to styling the website. It is your part 😉

# `create-next-app`

If you already have a next.js app, just run the second command.

```shell
$ npx create-next-app .
```

```shell
$ yarn add marked gray-matter highlight.js
```

# Logic

So we will have a posts directory in our root directory. In this dir, we will create our posts which are markdown files. A basic post will be like this.

```yaml
---
title: Here goes our title
description: Here goes our description
---
Our content...
```

The top defintions in the are called as frontmatter. we will be extracting this with [`gray-matter`](https://www.npmjs.com/package/gray-matter) library.

On our index page we will be using the fs module to get all the markdown files in the directory, using gray-matter we will extract the frontmatter and display the list of posts using the title.

```jsx
// index.jsx

const fs = require("fs");
const path = require("path");
import Link from "next/link";
import Head from "next/head";
import matter from "gray-matter";

const Home = function ({ posts, slug }) {
  return (
    <div>
      <Head>
        <title>Code With Chaitanya</title>
      </Head>
      <h2 className="sub-title">Recent Blog Posts</h2>

      <ul>
        {posts.map((post) => {
          <Link href={slug}>
            <li>{post.title}</li>
          </Link>;
        })}
      </ul>
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
```

**`Note`**: data === frontmatter

See how we are getting the slug. it's the filename without the extension. we will be generating the paths in our `[slug].jsx` file.

We will use the same logic as in our index file. but with some modifications

```jsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import { useEffect } from "react";
import Head from "next/head";

const Post = function ({ content, data }) {
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

export const getStaticPaths = function () {
  let files = fs
    .readdirSync(path.join("posts"))
    .map((file) => {
      return file.replace(".md", "");
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

export const getStaticProps = function ({ params: { slug } }) {
  const markdownFile = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data, content } = matter(markdownFile);

  return {
    props: {
      data,
      content,
    },
  };
};
```

Let me explain all of this code.

- We are using getStaticPaths for generating paths for our blog.
- We are using the fs module to get the slug and returning that.
- We are using the value we returned from getStaticPaths in our getStaticProps.
- And we are using marked to convert our markdown to html and returning that.
- And using that in our markup.

<video controls="true" allowfullscreen="true" width="800" >
    <source src="/blog.webm" type="video/webm" />
 </video>

# Conclusion

Try to add more features to the blog. Make the blog design simple and elegant. The reason I don't explain most is that you need to understand the code by yourself it's a best skill for developers. See you in my next article bye 👋.
