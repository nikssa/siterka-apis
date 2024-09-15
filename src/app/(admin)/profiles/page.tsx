import ProfileForm from '@/components/forms/ProfileForm';
import { getProfiles } from '@/data-access/profile';
import { ProfileDataProps } from '@/types/types';

export const metadata = {
  title: 'Profiles page | SITERKA',
  description: 'Listing all user profiles.'
};

const ProfilePage = async () => {
  const profiles = await getProfiles();

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
                  <a href={`profiles/${profile.userId}`}>{profile.firstName}</a>
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
