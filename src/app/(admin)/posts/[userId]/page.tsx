import PostForm from '@/components/forms/PostForm';
import ProfileForm from '@/components/forms/ProfileForm';
import UserForm from '@/components/forms/UserForm';
import useIsAuthenticated from '@/hooks/useIsAuthenticated';
import React from 'react';

export const metadata = {
  title: 'Add or Update Post | SITERKA',
  description:
    "Add or update post/advert/ about yourself. After it's published, users will be able to see it."
};

const PostByUserId = async () => {
  const { user } = await useIsAuthenticated();
  const userId = user?.id as number;

  const profile = await fetch(`http://localhost:4000/api/profiles/${userId}`, {
    method: 'GET'
  });
  const userProfile = await profile.json();
  console.log('userProfile', userProfile);

  return (
    <>
      <h1>Add About Yourself</h1>

      <UserForm data={user} readOnly={true} />
      <ProfileForm data={userProfile} readOnly={true} />
      <PostForm userId={userId} />
    </>
  );
};

export default PostByUserId;
