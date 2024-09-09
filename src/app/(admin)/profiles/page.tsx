import ProfileForm, { ProfileDataProps } from '@/components/forms/ProfileForm';

const ProfilePage = async () => {
  const profilesData = await fetch('http://localhost:4000/api/profiles', {
    method: 'GET'
  });
  const profiles = await profilesData.json();

  return (
    <>
      <h1>Profiles</h1>
      {profiles && (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Bio</th>
              <th>User ID</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile: ProfileDataProps) => (
              <tr key={profile.id}>
                <td>
                  <a href={`profiles/${profile.user?.id}`}>
                    {profile.firstName}
                  </a>
                </td>
                <td>{profile.lastName}</td>
                <td>{profile.gender}</td>
                <td>{profile.bio}</td>
                <td>{profile.user?.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {}
    </>
  );
};

export default ProfilePage;
