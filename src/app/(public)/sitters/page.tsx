import UserCard from '@/components/common/UserCard/UserCard';
import { UserDataProps } from '@/types/types';

const SittersPage = async function () {
  const usersData = await fetch('http://localhost:4000/api/sitters', {
    method: 'GET'
  });

  console.log('status', usersData.status);
  console.log('ok', usersData.ok);

  let sitters = await usersData.json();
  sitters = sitters.filter((sitter: UserDataProps) => sitter.post !== null);

  if (sitters.length === 0) {
    return (
      <section>
        <div className='inner'>
          <h1>Sorry, there are no sitters yet</h1>
        </div>
      </section>
    );
  }

  return (
    <>
      <section>
        <div className='inner'>
          <h1>Searching for a sitter</h1>
          {sitters &&
            sitters.map((sitter: UserDataProps) => (
              <UserCard key={sitter.id} data={sitter} role='sitter' />
            ))}
        </div>
      </section>
    </>
  );
};

export default SittersPage;
