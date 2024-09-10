'use client';

import React, { ChangeEvent, FormEvent } from 'react';
import Button from '@/components/formElements/Button/Button';
import RadioGroup from '@/components/formElements/RadioGroup/RadioGroup';
import Input from '@/components/formElements/TextField/TextField';
import TextArea from '../formElements/TextAreaField/TextAreaField';
import { Slide, toast } from 'react-toastify';
import { convertISO8601ToDateTime } from '@/utils/convertDate';

export type ProfileDataProps = {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    id: string;
  };
};

export type ChangeEventTypes =
  | ChangeEvent<HTMLTextAreaElement>
  | ChangeEvent<HTMLInputElement>;

const ProfileForm = ({
  data,
  userId
}: {
  data: ProfileDataProps;
  userId: string;
}) => {
  const initialData = {
    firstName: '',
    lastName: '',
    bio: '',
    gender: '',
    userId: Number(userId)
  };

  const [profileData, setProfileData] = React.useState(data || initialData);

  const handleChange = (e: ChangeEventTypes) => {
    const name = e.target.name;
    const checked =
      e.target instanceof HTMLInputElement ? e.target.checked : false;
    const inputValue = e.target.value;
    const value = e.target.type == 'checkbox' ? checked : inputValue;

    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const bio = formData.get('bio');
    const gender = formData.get('gender');
    const url = !data
      ? 'http://localhost:4000/api/profiles'
      : `http://localhost:4000/api/profiles/${userId}`;
    const method = !data ? 'POST' : 'PUT';

    try {
      const res = await fetch(url, {
        method: method,
        body: JSON.stringify({
          userId: Number(userId),
          firstName,
          lastName,
          bio,
          gender
        })
      });
      const profile = await res.json();
      if (res.status === 200) {
        toast.success('Profile successfully saved', {
          autoClose: 3000,
          transition: Slide
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        // throw new Error(error.message);
        toast.error(`Something went wrong... ${error.message}`, {
          // position: 'top-center',
          // autoClose: 3000,
          transition: Slide
        });
      }
    }
  };

  const profileCreated = convertISO8601ToDateTime(
    profileData?.createdAt,
    'en-150'
  );
  const profileUpdated = convertISO8601ToDateTime(
    profileData?.updatedAt,
    'en-150'
  );

  return (
    <form action='' onSubmit={handleSubmit}>
      <p>
        Profile created: {profileCreated} | Profile updated: {profileUpdated}
      </p>
      <Input
        isHidden={true}
        label='User Id'
        name='userId'
        type='text'
        defaultValue={Number(userId)}
      />
      <Input
        label='First Name'
        name='firstName'
        type='text'
        placeholder='First Name'
        required
        value={profileData?.firstName}
        onChange={handleChange}
      />
      <Input
        label='Last Name'
        name='lastName'
        type='text'
        placeholder='Last Name'
        required
        value={profileData?.lastName}
        onChange={handleChange}
        // error='Email is not valid'
      />
      <RadioGroup
        label='Gender'
        name='gender'
        options={['male', 'female', 'other']}
        value={profileData?.gender}
        onChange={handleChange}
        // error='Please select a role'
      />
      <TextArea
        label='Short Bio'
        name='bio'
        // type='text'
        placeholder='Short Bio'
        // required
        value={profileData?.bio}
        onChange={handleChange}
        // error="Password and Confirm Password don't match"
      />
      {/* <RadioGroup
          label='Role'
          name='role'
          options={['parent', 'sitter']}
          value={profileData?.role}
          onChange={handleChange}
          // error='Please select a role'
        /> */}

      <Button label={!data ? 'Add' : 'Update'} type='submit' />
    </form>
  );
};

export default ProfileForm;
