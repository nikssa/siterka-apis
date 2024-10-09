// import ProfileForm from '@/components/forms/ProfileForm';
// import UserForm from '@/components/forms/UserForm';
import PostForm from '@/components/forms/postForm/PostForm';
import { getUserIncludeProfileAndPost } from '@/data-access/user';
import useIsAuthenticated from '@/hooks/useIsAuthenticated';
import { PostDataProps } from '@/types/types';
import Link from 'next/link';

import { ChildAge, ChildAgeGroupProps } from '@/types/types';
import { JsonObject, JsonValue } from '@prisma/client/runtime/library';

export const metadata = {
  title: 'Add or Update Post | SITERKA',
  description:
    "Add or update post/advert/ about yourself. After it's published, users will be able to see it."
};

type PostByUserIdProps = {
  params: { userId: string };
};

const convertJsonValueToChildAgeGroupProps = (
  jsonValue: JsonValue
): ChildAgeGroupProps => {
  const childAgeGroup: ChildAgeGroupProps = {
    newborns: false,
    infants: false,
    toddlers: false,
    preschoolers: false,
    schoolers: false,
    teens: false
  };

  if (typeof jsonValue === 'object' && jsonValue !== null) {
    const jsonObject = jsonValue as JsonObject;
    Object.keys(jsonObject).forEach((key) => {
      if (Object.values(ChildAge).includes(key as ChildAge)) {
        childAgeGroup[key as ChildAge] = jsonObject[key] as boolean;
      }
    });
  }

  return childAgeGroup;
};

const PostByUserId = async ({ params: { userId } }: PostByUserIdProps) => {
  const { isAuthenticated } = await useIsAuthenticated();

  const user = await getUserIncludeProfileAndPost({ userId: Number(userId) });
  const profile = user?.profile;
  const post = user?.post;

  const childAgeGroup = convertJsonValueToChildAgeGroupProps(
    post?.childAgeGroup as JsonValue
  );

  if (!user) {
    return (
      <>
        <section>
          <div className='inner'>
            <h1>User not found.</h1>
          </div>
        </section>
      </>
    );
  }

  if (!profile) {
    return (
      <>
        <section>
          <div className='inner'>
            <h1>User needs to create profile before it can post.</h1>
            <Link href={`/profiles/${userId}`}>Create Profile</Link>
          </div>
        </section>
      </>
    );
  }

  if (!post) {
    return (
      <>
        <section>
          <div className='inner'>
            <h1>Post not found.</h1>
            <Link href={`/posts/${userId}`}>Create Post</Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* <section>
        <div className='inner'>
          <h1>Add About Yourself</h1>
        </div>
      </section>

      <UserForm data={user as UserDataProps} readOnly={true} />

      <ProfileForm
        data={profile as ProfileDataProps}
        userId={Number(userId)}
        readOnly={true}
      /> */}

      <PostForm
        name={profile?.firstName}
        data={post as unknown as PostDataProps}
      />

      {/* <PostForm name={profile?.firstName} data={{ ...post, childAgeGroup: childAgeGroup as ChildAgeGroupProps }} /> */}
    </>
  );
};

export default PostByUserId;
