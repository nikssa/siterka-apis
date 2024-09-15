import DeleteUser from '@/components/common/DeleteUser/DeleteUser';
import useIsAuthenticated from '@/hooks/useIsAuthenticated';
import Link from 'next/link';
import { Suspense } from 'react';

export const metadata = {
  title: 'Users page | SITERKA',
  description:
    'Listing all user accounts. Admins can delete users and change their roles.'
};

const Users = async function () {
  const { isAuthenticated, user } = await useIsAuthenticated();
  console.log('isAuthenticated', isAuthenticated);

  const usersData = await fetch('http://localhost:4000/api/users', {
    method: 'GET'
  });
  const users = await usersData.json();

  const usersRender = users.map(async (userItem: any) => {
    const res = await fetch(
      `http://localhost:4000/api/profiles/${userItem.id}`,
      {
        method: 'GET'
      }
    );
    const profile = await res.json();

    const userRole = user.role;

    return (
      <tr key={userItem.id}>
        <td>
          <Link href={`/users/${userItem.id}`}>{userItem.name}</Link>
        </td>

        {userRole === 'admin' && (
          <>
            <td>{userItem.email}</td>
            <td>{userItem.password}</td>
          </>
        )}

        <td>{userItem.role}</td>

        {userRole === 'admin' && (
          <>
            <td>
              <Link href={`/profiles/${userItem.id}`}>
                {!profile ? 'Add Profile' : 'Edit Profile'}
              </Link>
            </td>
            <td>
              <DeleteUser userId={userItem.id} />
            </td>
          </>
        )}
      </tr>
    );
  });

  return (
    <>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            {user.role === 'admin' && (
              <>
                <th>Email</th>
                <th>Password</th>
              </>
            )}
            <th>Role</th>
            {user.role === 'admin' && (
              <>
                <th>Profile</th>
                <th>Delete</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          <Suspense
            fallback={
              <tr>
                <td colSpan={6}>Loading...</td>
              </tr>
            }>
            {usersRender}
          </Suspense>
        </tbody>
      </table>
    </>
  );
};

export default Users;
