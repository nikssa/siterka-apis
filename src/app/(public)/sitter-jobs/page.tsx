import UserCard from '@/components/common/UserCard/UserCard';
import { UserDataProps } from '@/types/types';

const SearchJobPage = async () => {
  const usersData = await fetch('http://localhost:4000/api/parents', {
    method: 'GET'
  });

  console.log('status', usersData.status);
  console.log('ok', usersData.ok);

  let parents = await usersData.json();
  parents = parents.filter((parent: UserDataProps) => parent.post !== null);

  console.log('parents', parents);

  if (parents.length === 0) {
    return (
      <section>
        <div className='inner'>
          <h1>Sorry, there are no listed jobs yet</h1>
        </div>
      </section>
    );
  }

  return (
    <>
      <section>
        <div className='inner'>
          <h1>Search for a sitter job</h1>
          {parents &&
            parents.map((parent: UserDataProps) => (
              <UserCard key={parent.id} data={parent} />
            ))}
        </div>
      </section>
    </>
  );
};

export default SearchJobPage;
