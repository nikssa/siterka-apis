import UserCardDetails from '@/components/common/UserCardDetails/UserCardDetails';
import { getPostByUserId } from '@/data-access/post';
import { PostDataProps } from '@/types/types';

const SingleSitterPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log(id);

  const postData = await getPostByUserId(Number(id));

  console.log('postData', postData);

  return (
    <section>
      <div className='inner'>
        <UserCardDetails data={postData as PostDataProps} />
      </div>
    </section>
  );
};

export default SingleSitterPage;
