const SittersPage = async function () {
  const usersData = await fetch('http://localhost:4000/api/sitters', {
    method: 'GET'
  });
  const users = await usersData.json();

  return (
    <>
      <section>
        <div className='inner'>
          <h1>Sitters Page</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: any) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default SittersPage;
