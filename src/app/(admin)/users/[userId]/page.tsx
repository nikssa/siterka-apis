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
      <section>
        <div className='inner'>
          <h1>User</h1>
        </div>
      </section>

      {isAuthenticated ? (
        <UserForm data={user as UserDataProps} readOnly={true} />
      ) : (
        <section>
          <div className='inner'>
            <p>You are not authenticated.</p>
          </div>
        </section>
      )}
    </>
  );
};

export default User;
