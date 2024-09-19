import ProfileForm from '@/components/forms/ProfileForm';
import UserForm from '@/components/forms/UserForm';
import { getProfileIncludeUser } from '@/data-access/profile';
import { getUser } from '@/data-access/user';
import { ProfileDataProps, UserDataProps } from '@/types/types';

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

  return (
    <>
      <section>
        <div className='inner'>
          <h1>{!profile && 'Add'} User profile</h1>

          <h2>User</h2>
          <UserForm data={user as UserDataProps} readOnly={true} />

          <h3>Profile</h3>
          <ProfileForm
            data={profile as ProfileDataProps}
            userId={Number(userId)}
          />
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
