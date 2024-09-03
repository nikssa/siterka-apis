import ProfileForm from '@/app/components/forms/ProfileForm';
import UserForm from '@/app/components/forms/UserForm';

const ProfilePage = async ({
  params: { userId }
}: {
  params: { userId: string };
}) => {
  console.log('userId', userId);
  const res = await fetch(`http://localhost:4000/api/profiles/${userId}`, {
    method: 'GET'
  });

  const profile = await res.json();
  console.log('profile', profile);

  // const status = res.status;
  // console.log('status', status);

  let user;

  if (!profile) {
    const res = await fetch(`http://localhost:4000/api/users/${userId}`, {
      method: 'GET'
    });
    user = await res.json();
    console.log('user', user);
  }

  return (
    <>
      <h1>{!profile && 'Add'} User profile</h1>

      <h2>User </h2>
      <UserForm data={!profile ? user : profile.user} readOnly={true} />

      <h3>Profile</h3>
      <ProfileForm data={profile} userId={userId} />
    </>
  );
};

export default ProfilePage;
