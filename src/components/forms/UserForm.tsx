'use client';

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Button from '@/components/formElements/Button/Button';
import RadioGroup from '@/components/formElements/RadioGroup/RadioGroup';
import Input from '@/components/formElements/TextField/TextField';
import { convertISO8601ToDateTime } from '@/utils/convertDate';
import useIsAuthenticatedClient from '@/hooks/useIsAuthenticatedClient';
import { UserDataProps } from '@/types/types';

const UserForm = ({
  data,
  readOnly = false
}: {
  data: UserDataProps;
  readOnly?: boolean;
}) => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<UserDataProps>(data);

  const { isAuthenticated, user } = useIsAuthenticatedClient();
  const role = user?.role;

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (
    (!loading && !isAuthenticated) ||
    (!loading &&
      isAuthenticated &&
      role !== 'admin' &&
      user?.id !== userData.id?.toString())
  ) {
    return (
      <>
        <h1>Access denied</h1>
      </>
    );
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const userAccountCreated =
    userData.createdAt &&
    convertISO8601ToDateTime(userData.createdAt.toString(), 'en-150');

  console.log('data', data);
  console.log('userData', userData);
  console.log('loading', loading);

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
        {`User active: ${userData.active ? 'Yes' : 'No'}`}
        <br />
        {`User deleted: ${userData.deleted ? 'Yes' : 'No'}`}
      </p>
      <p></p>

      {!readOnly ? (
        <Button className={`primary`} label='Save' type='submit' />
      ) : null}
    </form>
  );
};

export default UserForm;
