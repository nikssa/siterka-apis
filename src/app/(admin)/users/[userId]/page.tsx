import UserForm from '@/components/forms/UserForm';

export const metadata = {
  title: 'User page | SITERKA',
  description: 'Update user account data.'
};

const User = async function ({
  params: { userId }
}: {
  params: { userId: string };
}) {
  const userData = await fetch(`http://localhost:4000/api/users/${userId}`, {
    method: 'GET'
  });
  const user = await userData.json();

  console.log('user', user);

  return (
    <>
      <h1>User</h1>

      <UserForm data={user} readOnly={true} />
    </>
  );
};

export default User;
