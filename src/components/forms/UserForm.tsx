'use client';

import React, { ChangeEvent, FormEvent } from 'react';
import Button from '@/components/formElements/Button/Button';
import RadioGroup from '@/components/formElements/RadioGroup/RadioGroup';
import Input from '@/components/formElements/TextField/TextField';
import { convertISO8601ToDateTime } from '@/utils/convertDate';

type PhotoProps = {
  url: string;
};

type UserDataProps = {
  name: string;
  email: string;
  role: string;
  active: boolean;
  deleted: boolean;
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
  };

  const userAccountCreated = convertISO8601ToDateTime(
    userData?.createdAt,
    'en-150'
  );

  return (
    <form action='' onSubmit={handleSubmit} aria-disabled={readOnly}>
      <p>Account created: {userAccountCreated}</p>
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
      />

      <RadioGroup
        label='Role'
        name='role'
        options={['admin', 'parent', 'sitter', 'moderator']}
        value={userData?.role}
        onChange={handleChange}
        disabled={readOnly}
      />

      <p>{`User active: ${userData.active ? 'Yes' : 'No'}`}</p>
      <p>{`User deleted: ${userData.deleted ? 'Yes' : 'No'}`}</p>

      <Button
        className={`primary ${readOnly ? 'disabled' : ''}`}
        label='Save'
        type='submit'
      />
    </form>
  );
};

export default UserForm;
