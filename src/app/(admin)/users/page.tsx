const Users = async function () {
  const usersData = await fetch('http://localhost:4000/api/users', {
    method: 'GET'
  });
  const users = await usersData.json();
  console.log('users', users);

  const usersRender = users.map(async (user: any) => {
    const res = await fetch(`http://localhost:4000/api/profiles/${user.id}`, {
      method: 'GET'
    });
    const profile = await res.json();
    console.log('profile', profile);
    return (
      <tr key={user.id}>
        <td>
          <a href={`/users/${user.id}`}>{user.name}</a>
        </td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.role}</td>
        <td>
          <a href={`/profiles/${user.id}`}>
            {!profile ? 'Add Profile' : 'Edit Profile'}
          </a>
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
          </tr>
        </thead>
        <tbody>{usersRender}</tbody>
      </table>
    </>
  );
};

export default Users;
