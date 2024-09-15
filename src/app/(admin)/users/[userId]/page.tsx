import UserForm from '@/components/forms/UserForm';
import { getUser } from '@/data-access/user';
import useIsAuthenticated from '@/hooks/useIsAuthenticated';
import { UserDataProps } from '@/types/types';

export const metadata = {
  title: 'User page | SITERKA',
  description: 'Update user account data.'
};

const User = async function ({
  params: { userId }
}: {
  params: { userId: string };
}) {
  const { isAuthenticated } = await useIsAuthenticated();
  const user = await getUser({ userId: Number(userId) });

  return (
    <>
      <h1>User</h1>
      {isAuthenticated ? (
        <UserForm data={user as UserDataProps} readOnly={true} />
      ) : (
        <p>Not authenticated</p>
      )}
    </>
  );
};

export default User;
