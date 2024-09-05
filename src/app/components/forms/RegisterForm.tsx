'use client';

import React, { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';
import Input from '../formElements/TextField/TextField';
import RadioGroup from '../formElements/RadioGroup/RadioGroup';
import Checkbox from '../formElements/Checkbox/Checkbox';
import Button from '../formElements/Button/Button';
import Link from 'next/link';
import { redirect } from 'next/navigation';

enum Role {
  Sitter = 'sitter',
  Parent = 'parent',
  Moderator = 'moderator',
  Admin = 'admin'
}

type RegisterDataProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: Role;
  acceptTerms: boolean;
};

// type RegistrationFormProps = {
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
//   onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
//   data: {
//     name: string;
//     email: string;
//     password: string;
//     confirmPassword: string;
//     role: string;
//     acceptTerms: boolean;
//   };
// };

const RegisterForm = () => {
  const initialValue = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: Role.Sitter,
    acceptTerms: false
  };

  const [registerData, setRegisterData] =
    useState<RegisterDataProps>(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();

    console.log('checked', e.target.type);
    console.log('event', e);

    const name = e.target.name;
    const value =
      e.target.type == 'checkbox' ? e.target.checked : e.target.value;

    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // remove confirmPassword from the object 'registerData' and send it to the server
    const { confirmPassword, ...data } = registerData;

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      redirect('/registration-success?toast=success');

      //   setRegisterData(initialValue);

      // TODO toast success message
    } catch (error) {
      console.log(error);
      // TODO toast error message
    } finally {
      // TODO mail confirmation
    }
  };

  // console.log('registerData', registerData);

  //   useEffect(() => {
  //     console.log('registerData', registerData);
  //   }, [registerData]);

  return (
    <form action='' onSubmit={handleSubmit}>
      <Input
        label='Username'
        name='name'
        type='text'
        placeholder='Username'
        pattern='.{3,}'
        required
        value={registerData.name}
        onChange={handleChange}
        error='Username has to be at least 3 characters long.'
        autoFocus={true}
      />
      <Input
        label='Email'
        name='email'
        type='email'
        placeholder='Email'
        required
        value={registerData.email}
        onChange={handleChange}
        error='Email is not in valid format.'
      />
      <Input
        label='Password'
        name='password'
        type='text'
        placeholder='Password'
        required
        value={registerData.password}
        onChange={handleChange}
        error='Password min length is 8 characters. At least one uppercase letter, one lowercase letter, and one number.'
      />
      <Input
        label='Confirm Password'
        name='confirmPassword'
        type='text'
        placeholder='Confirm Password'
        required
        pattern={registerData.password}
        value={registerData.confirmPassword}
        onChange={handleChange}
        error="Password and Confirm password don't match."
      />
      <RadioGroup
        label='Role'
        name='role'
        options={['parent', 'sitter']}
        value={registerData.role}
        required
        onChange={handleChange}
        // error='Please select a role'
      />

      <Checkbox
        id='acceptTerms'
        name='acceptTerms'
        label='I accept the terms and conditions'
        checked={registerData.acceptTerms}
        onChange={handleChange}
        required={true}
        error='Please accept the terms and conditions'
      />

      <p className='login-register-link'>
        Already have an account? <Link href='/login'>Sign in</Link>
      </p>

      <Button label='Join' type='submit' />
    </form>
  );
};

export default RegisterForm;
