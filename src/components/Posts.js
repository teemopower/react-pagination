import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <h1>Posts</h1>
      <ul className="content">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
