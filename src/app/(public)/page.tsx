import FalseButton from '../../components/FalseButton';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const HomePage = async () => {
  // const blogs = await fetch('https://api.vercel.app/blog', {
  //   method: 'GET'
  // });
  // const blogsData = await blogs.json();

  const users = await prisma.user.findMany();

  console.log('users', users);

  return (
    <>
      <section>
        <h1>Home Page</h1>
        {/* <ol>
          {blogsData.map((blog: any) => (
            <li key={blog.id} style={{ listStyleType: 'number' }}>
              {blog.title} - {blog.author}
            </li>
          ))}
        </ol> */}

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
