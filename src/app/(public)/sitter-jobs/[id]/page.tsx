import UserCardDetails from '@/components/common/UserCardDetails/UserCardDetails';

const SingleParentPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const userData = await fetch(`http://localhost:4000/api/sitters/${id}`, {
    method: 'GET'
  });

  console.log('status', userData.status);
  console.log('ok', userData.ok);

  const user = await userData.json();

  // TODO: Use user?.post?.title for SEO friendly URLs

  return (
    <section>
      <div className='inner'>
        <UserCardDetails data={user} role='parent' />
      </div>
    </section>
  );
};

export default SingleParentPage;
