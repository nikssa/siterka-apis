'use client';

import Input from '../formElements/TextField/TextField';

const PostForm = ({ userId }: { userId: number }) => {
  return (
    <form action='' style={{ marginTop: '20px' }}>
      <Input
        type='text'
        name='firstname'
        label='firstname'
        placeholder='First Name'
      />
    </form>
  );
};

export default PostForm;
