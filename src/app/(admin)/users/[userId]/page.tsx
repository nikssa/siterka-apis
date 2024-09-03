import UserForm from '@/app/components/forms/UserForm';

const User = async function ({
  params: { userId }
}: {
  params: { userId: string };
}) {
  //   console.log('userId', userId);
  const userData = await fetch(`http://localhost:4000/api/users/${userId}`, {
    method: 'GET'
  });
  const user = await userData.json();
  console.log('user', user);

  return (
    <>
      <h1>User</h1>
      <UserForm data={user} />
    </>
  );
};

export default User;
