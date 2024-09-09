'use client';

import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import Input from '../formElements/TextField/TextField';
import Link from 'next/link';
import Button from '../formElements/Button/Button';
import { useFormState, useFormStatus } from 'react-dom';
import { LoginFormSubmit } from '@/actions/actions';
import { toast } from 'react-toastify';

type LoginDataProps = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [loginFormStatus, loginFormAction] = useFormState(LoginFormSubmit, '');
  const { pending } = useFormStatus();

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

  useEffect(() => {
    if (
      loginFormStatus &&
      !loginFormStatus.user &&
      loginFormStatus.status !== 200
    ) {
      console.log('loginFormStatus', loginFormStatus);
      toast.error(`${loginFormStatus.statusText}`);
    }
  }, [loginFormStatus.status]);

  return (
    <form ref={formElement} action={loginFormAction}>
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
        type='password'
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

      <p>{pending ? 'Please wait...' : ''}</p>

      <Button
        disabled={!isFormValid || pending}
        className={`primary ${!isFormValid || pending ? 'disabled' : ''}`}
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
