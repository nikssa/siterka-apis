'use client';

import React, { ChangeEvent, FormEvent } from 'react';
import Button from '@/app/components/formElements/Button/Button';
import RadioGroup from '@/app/components/formElements/RadioGroup/RadioGroup';
import Input from '@/app/components/formElements/TextField/TextField';
import { convertISO8601ToDateTime } from '@/utils';

type PhotoProps = {
  url: string;
};

type UserDataProps = {
  name: string;
  email: string;
  role: string;
  photos: PhotoProps[];
  createdAt: string;
};

const UserForm = ({
  data,
  readOnly = false
}: {
  data: UserDataProps;
  readOnly?: boolean;
}) => {
  const [userData, setUserData] = React.useState(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('submit', userData);
    console.log('event', e);
  };

  const userAccountCreated = convertISO8601ToDateTime(
    userData?.createdAt,
    'en-150'
  );

  return (
    <form action='' onSubmit={handleSubmit} aria-disabled={readOnly}>
      <p>Account is created at: {userAccountCreated}</p>
      <Input
        label='User Name'
        name='name'
        type='text'
        placeholder='User Name'
        required
        value={userData?.name}
        onChange={handleChange}
        disabled={readOnly}
      />
      <Input
        label='Email'
        name=''
        type='text'
        placeholder='Email'
        required
        value={userData?.email}
        onChange={handleChange}
        disabled={true}
        // error='Email is not valid'
      />

      {!readOnly && <Button label='Save' type='submit' />}
    </form>
  );
};

export default UserForm;
