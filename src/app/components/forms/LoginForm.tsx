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

  return (
    <form action=''>
      <Input
        label='Email'
        name='email'
        type='email'
        placeholder='Email'
        pattern='^[^@]+@[^@]+\.[^@]+$'
        required
        value={registerData.email}
        onChange={handleChange}
        error='Email is not in valid format.'
        autoFocus={true}
      />
      <Input
        label='Password'
        name='password'
        type='password'
        placeholder='Password'
        // pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$'
        pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$'
        required
        value={registerData.password}
        onChange={handleChange}
        error='Must be between 8-20 characters long. At least one uppercase letter, one lowercase letter, and one number.'
      />

      <p className='forgot-password-link'>
        <Link href='/forgot-password'>Forgot password?</Link>
      </p>

      <Button className='primary' label='Sign in' type='submit' />

      <p className='login-register-link'>
        Don't have an account? <Link href='/register'>Join</Link>
      </p>
    </form>
  );
};

export default LoginForm;
