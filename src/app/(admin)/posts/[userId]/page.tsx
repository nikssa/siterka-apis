import PostForm from '@/components/forms/PostForm';
import ProfileForm from '@/components/forms/ProfileForm';
import UserForm from '@/components/forms/UserForm';
import { getUserIncludeProfileAndPost } from '@/data-access/user';
import useIsAuthenticated from '@/hooks/useIsAuthenticated';
import { PostDataProps, ProfileDataProps, UserDataProps } from '@/types/types';
import React from 'react';

export const metadata = {
  title: 'Add or Update Post | SITERKA',
  description:
    "Add or update post/advert/ about yourself. After it's published, users will be able to see it."
};

type PostByUserIdProps = {
  params: { userId: string };
};

const PostByUserId = async ({ params: { userId } }: PostByUserIdProps) => {
  const { isAuthenticated } = await useIsAuthenticated();

  const user = await getUserIncludeProfileAndPost({ userId: Number(userId) });
  const profile = user?.profile;
  const post = user?.post;

  return (
    <>
      <h1>Add About Yourself</h1>

      <UserForm data={user as UserDataProps} readOnly={true} />
      <ProfileForm data={profile as ProfileDataProps} readOnly={true} />
      <PostForm data={post as PostDataProps} />
    </>
  );
};

export default PostByUserId;
