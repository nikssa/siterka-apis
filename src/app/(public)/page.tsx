import FalseButton from '../components/FalseButton';

const HomePage = async () => {
  const blogs = await fetch('https://api.vercel.app/blog', {
    method: 'GET'
  });
  const blogsData = await blogs.json();

  return (
    <>
      <section>
        <h1>Home Page</h1>
        <ol>
          {blogsData.map((blog: any) => (
            <li key={blog.id} style={{ listStyleType: 'number' }}>
              {blog.title} - {blog.author}
            </li>
          ))}
        </ol>
        <FalseButton />
      </section>
    </>
  );
};

export default HomePage;
