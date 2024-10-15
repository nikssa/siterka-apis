import UserCardDetails from '@/components/common/UserCardDetails/UserCardDetails';
import { getPostByUserId } from '@/data-access/post';
import { PostDataProps } from '@/types/types';

const SingleSitterPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const postData = await getPostByUserId(Number(id));

  return (
    <section>
      <div className='inner'>
        <UserCardDetails data={postData as unknown as PostDataProps} />
      </div>
    </section>
  );
};

export default SingleSitterPage;
