import { getPosts } from '@/data-access/post';
import React from 'react';

export const metadata = {
  title: 'Posts page | SITERKA',
  description: 'Listing all user posts.'
};

const Posts = async () => {
  const posts = await getPosts();
  console.log('posts', posts);

  return (
    <>
      <h1>Posts</h1>
      {posts && posts?.length > 0 ? (
        <ul>
          {posts?.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>No posts found</p>
      )}
    </>
  );
};

export default Posts;
