import ProfileForm from '@/components/forms/ProfileForm';
import UserForm from '@/components/forms/UserForm';
import { getProfileIncludeUser } from '@/data-access/profile';
import { getUser } from '@/data-access/user';
import { ProfileDataProps, Role, UserDataProps } from '@/types/types';

export const metadata = {
  title: 'Profile page | SITERKA',
  description: 'User profile page.'
};

const ProfilePage = async ({
  params: { userId }
}: {
  params: { userId: string };
}) => {
  const profile = await getProfileIncludeUser(Number(userId));
  let user: UserDataProps | null | undefined = profile?.user;

  if (!profile) {
    user = await getUser({ userId: Number(userId) });
  }

  const isAdmin = user?.role === Role.ADMIN;

  console.log('user', user);
  console.log('profile', profile);

  return (
    <>
      <section>
        <div className='inner'>
          <h1>{!profile && 'Add'} User profile</h1>
        </div>
      </section>

      {isAdmin && <UserForm data={user as UserDataProps} readOnly={true} />}

      <ProfileForm data={profile as ProfileDataProps} userId={Number(userId)} />
    </>
  );
};

export default ProfilePage;
