import DeleteUser from '@/app/components/common/DeleteUser/DeleteUser';
import Link from 'next/link';
import { Suspense } from 'react';

const Users = async function () {
  const usersData = await fetch('http://localhost:4000/api/users', {
    method: 'GET'
  });
  const users = await usersData.json();

  const usersRender = users.map(async (user: any) => {
    const res = await fetch(`http://localhost:4000/api/profiles/${user.id}`, {
      method: 'GET'
    });
    const profile = await res.json();

    return (
      <tr key={user.id}>
        <td>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.role}</td>
        <td>
          <Link href={`/profiles/${user.id}`}>
            {!profile ? 'Add Profile' : 'Edit Profile'}
          </Link>
        </td>
        <td>
          <DeleteUser userId={user.id} />
        </td>
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
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th>Profile</th>
            <th>Delete</th>
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
