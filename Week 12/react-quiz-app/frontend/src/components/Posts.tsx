import React from "react";
import "./Posts.css";
type PropsType = {
  posts: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
  loading: boolean;
};
export default function Post({ posts, loading }: PropsType) {
  if (loading) {
    return <div>Data is Loading...</div>;
  }
  return (
    <ul>
      {posts.map((post) => (
        <li className="post" key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
}
