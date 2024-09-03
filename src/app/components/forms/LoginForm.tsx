'use client';

import React, { ChangeEvent, useState } from 'react';
import Input from '../formElements/TextField/TextField';
import Link from 'next/link';
import Button from '../formElements/Button/Button';

const LoginForm = () => {
  const initialValue = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    acceptTerms: false
  };

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('/api/users', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(registerData)
  //     });
  //     setRegisterData(initialValue);
  //     // TODO toast success message
  //   } catch (error) {
  //     console.log(error);
  //     // TODO toast error message
  //   } finally {
  //     // TODO mail confirmation
  //   }
  // };

  type RegisterData = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
    acceptTerms: boolean;
  };

  const [registerData, setRegisterData] = useState<RegisterData>(initialValue);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;

    setRegisterData({ ...registerData, [name]: value });
  };

  console.log('registerData', registerData);

  return (
    <form action=''>
      <Input
        label='Email'
        name='email'
        type='email'
        placeholder='Email'
        required
        value={registerData.email}
        onChange={handleChange}
        // error='Email is not valid'
      />
      <Input
        label='Password'
        name='password'
        type='password'
        placeholder='Password'
        required
        value={registerData.password}
        onChange={handleChange}
        // error="Password and Confirm Password don't match"
      />

      <p className='forgot-password-link'>
        <Link href='/forgot-password'>Forgot password?</Link>
      </p>

      <Button label='Sign in' type='submit' />

      <p className='login-register-link'>
        Don't have an account? <Link href='/register'>Join</Link>
      </p>
    </form>
  );
};

export default LoginForm;
