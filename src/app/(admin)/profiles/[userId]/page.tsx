import ProfileForm from '@/components/forms/ProfileForm';
import UserForm from '@/components/forms/UserForm';

export const metadata = {
  title: 'Profile page | SITERKA',
  description: 'User profile page.'
};

const ProfilePage = async ({
  params: { userId }
}: {
  params: { userId: string };
}) => {
  const res = await fetch(`http://localhost:4000/api/profiles/${userId}`, {
    method: 'GET'
  });

  const profile = await res.json();

  let user;

  if (!profile) {
    const res = await fetch(`http://localhost:4000/api/users/${userId}`, {
      method: 'GET'
    });
    user = await res.json();
  }

  return (
    <>
      <h1>{!profile && 'Add'} User profile</h1>

      <h2>User </h2>
      <UserForm data={!profile ? user : profile.user} readOnly={true} />

      <h3>Profile</h3>
      <ProfileForm data={profile} userId={Number(userId)} />
    </>
  );
};

export default ProfilePage;
