import Link from "next/link";

interface PostsProps {
  posts: {
    data: {
      title: string;
      description: string;
    };
    content: string;
    slug: string;
  }[];
}
const Posts = function ({ posts }: PostsProps) {
  posts = posts.reverse();
  return (
    <div className="posts">
      {posts.map((cur, i) => (
        <div className="post-card" key={cur.slug}>
          <h2>{cur.data.title}</h2>
          <p>{cur.data.description}</p>
          <Link href={`/${cur.slug}`}>
            <a className="read-more">Read More --&gt;</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
