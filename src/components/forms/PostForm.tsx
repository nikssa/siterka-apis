'use client';

import { PostDataProps } from '@/types/types';
import Input from '../formElements/TextField/TextField';

type PostFormProps = {
  data: PostDataProps;
};

const PostForm = ({ data }: PostFormProps) => {
  // if (!data.profile) {}
  // const firstName = data.profile.firstName;
  return (
    <form action='' style={{ marginTop: '20px' }}>
      <Input
        type='text'
        name='firstname'
        label='firstname'
        placeholder='First Name'
        // value={data?.title}
        // onChange={handleChange}
        defaultValue={data?.title}
      />
    </form>
  );
};

export default PostForm;
