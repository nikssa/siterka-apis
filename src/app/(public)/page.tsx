import { verifySession } from '@/utils/session';
import FalseButton from '../../components/FalseButton';
import { PrismaClient } from '@prisma/client';
import useUserLoggedIn from '@/hooks/useUserLoggedIn';

const prisma = new PrismaClient();

const HomePage = async () => {
  const isUserLoggedIn = await useUserLoggedIn();
  const users = await prisma.user.findMany();

  return isUserLoggedIn ? (
    <>
      <section>
        <h1>Home Page</h1>
        <ol>
          {users.map((user: any) => (
            <li key={user.id} style={{ listStyleType: 'number' }}>
              {user.name} - {user.email}
            </li>
          ))}
        </ol>
        <FalseButton />
      </section>
    </>
  ) : (
    <>
      <h1>Home Page</h1>
      <p>You don't have an access to view some content on this page</p>
    </>
  );
};

export default HomePage;
