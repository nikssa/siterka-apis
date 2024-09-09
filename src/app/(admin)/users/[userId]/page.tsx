import UserForm from '@/components/forms/UserForm';

const User = async function ({
  params: { userId }
}: {
  params: { userId: string };
}) {
  const userData = await fetch(`http://localhost:4000/api/users/${userId}`, {
    method: 'GET'
  });
  const user = await userData.json();

  return (
    <>
      <h1>User</h1>
      <UserForm data={user} readOnly={true} />
    </>
  );
};

export default User;
