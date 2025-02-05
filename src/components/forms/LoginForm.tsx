'use client';

import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import Input from '../formElements/TextField/TextField';
import Link from 'next/link';
import Button from '../formElements/Button/Button';
import loginFormAction from '@/app/actions/actions';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { createSession } from '@/utils/session';
import { UserDataProps } from '@/types/types';

type LoginDataProps = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();

  const initialValue = {
    email: '',
    password: ''
  };

  const [loginData, setLoginData] = useState<LoginDataProps>(initialValue);

  const formElement = useRef<HTMLFormElement>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(formElement.current?.checkValidity() ?? false);
  }, [loginData]);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  };

  const loginForm = async (formData: FormData) => {
    const result = await loginFormAction(formData);

    if (result.status === 200) {
      // Authenticate user - Create JWT session set cookie and redirect to homepage
      const userId = result.user?.id.toString();
      const user = { ...result.user, id: userId };
      // if (user && userId) {
      const session = await createSession(user as UserDataProps);
      router.push('/');
      // }
    } else {
      toast.error(`${result.statusText}`);
    }
  };

  return (
    <form ref={formElement} action={loginForm}>
      <Input
        label='Email'
        name='email'
        type='email'
        placeholder='Email'
        pattern='^[^@]+@[^@]+\.[^@]+$'
        required
        value={loginData.email}
        onChange={handleChange}
        error='Email is not in valid format.'
        autoFocus={true}
      />
      <Input
        label='Password'
        name='password'
        type='text'
        placeholder='Password'
        // pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$'
        required
        value={loginData.password}
        onChange={handleChange}
        error='Must be between 8-20 characters long. At least one uppercase letter, one lowercase letter, and one number.'
      />

      <p className='forgot-password-link'>
        <Link href='/forgot-password'>Forgot password?</Link>
      </p>

      <Button
        disabled={!isFormValid}
        className={!isFormValid ? 'disabled' : ''}
        primary={true}
        label='Sign in'
        type='submit'
      />

      <p className='login-register-link'>
        Don't have an account? <Link href='/register'>Join</Link>
      </p>
    </form>
  );
};

export default LoginForm;
