import { verifySession } from '@/utils/session';
import FalseButton from '../../components/FalseButton';
import { PrismaClient } from '@prisma/client';
import { getUserIncludeProfile, getUsers } from '@/data-access/user';

const prisma = new PrismaClient();

export const metadata = {
  title: 'Home page | SITERKA',
  description: 'This is a home page. Learn more about SITERKA.'
};

const HomePage = async () => {
  // const users = await prisma.user.findMany();

  const users = await getUsers();

  const user = await getUserIncludeProfile({ userId: 4 });

  return (
    <>
      <section>
        <h1>Home Page</h1>
        <div>
          <p>
            User email: {user?.email}, First name: {user?.profile?.firstName}
          </p>
        </div>
        <ol>
          {users?.map((user: any) => (
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
