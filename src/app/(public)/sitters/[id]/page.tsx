import UserCardDetails from '@/components/common/UserCardDetails/UserCardDetails';
import { getPostByUserId } from '@/data-access/post';
import { PostDataProps, UserDataProps } from '@/types/types';

const SingleSitterPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const userData = await fetch(`http://localhost:4000/api/sitters/${id}`, {
    method: 'GET'
  });
  const user = await userData.json();

  return (
    <section>
      <div className='inner'>
        <UserCardDetails data={user} />
      </div>
    </section>
  );
};

export default SingleSitterPage;
