import { verifySession } from '@/utils/session';
import FalseButton from '../../components/FalseButton';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const metadata = {
  title: 'Home page | SITERKA',
  description: 'This is a home page. Learn more about SITERKA.'
};

const HomePage = async () => {
  const users = await prisma.user.findMany();

  return (
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
  );
};

export default HomePage;
