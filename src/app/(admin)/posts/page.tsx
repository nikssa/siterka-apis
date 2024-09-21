import { getPosts } from '@/data-access/post';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Posts page | Admin part of SITERKA',
  description: 'Listing all user posts.'
};

const Posts = async () => {
  const posts = await getPosts();

  return (
    <>
      <section>
        <div className='inner'>
          <h1>Posts</h1>
          {posts && posts?.length > 0 ? (
            <ul>
              {posts?.map((post) => (
                <li key={post.id}>
                  <Link href={`/posts/${post.authorId}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No posts found</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Posts;
