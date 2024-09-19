'use client';

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Button from '@/components/formElements/Button/Button';
import RadioGroup from '@/components/formElements/RadioGroup/RadioGroup';
import Input from '@/components/formElements/TextField/TextField';
import { convertISO8601ToDateTime } from '@/utils/convertDate';
import { UserDataProps } from '@/types/types';

type UserFormProps = {
  data: UserDataProps;
  readOnly?: boolean;
};

const UserForm = ({ data, readOnly = false }: UserFormProps) => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<UserDataProps>(data);

  // const { isAuthenticated, user } = useIsAuthenticatedClient();
  const role = userData?.role;

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const userAccountCreated =
    userData?.createdAt &&
    convertISO8601ToDateTime(userData.createdAt.toString(), 'en-150');

  if (loading) {
    return <p>Loading...</p>;
  }

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

      <p>
        {`User active: ${userData?.active ? 'Yes' : 'No'}`}
        <br />
        {`User deleted: ${userData?.deleted ? 'Yes' : 'No'}`}
      </p>
      <p></p>

      {!readOnly ? <Button primary={true} label='Save' type='submit' /> : null}
    </form>
  );
};

export default UserForm;
