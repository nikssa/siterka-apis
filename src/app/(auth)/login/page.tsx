'use client';

import { FormEvent, useState, ChangeEvent, useEffect } from 'react';
import Input from '../../components/formElements/TextField/TextField';
import LoginIllustration from '/public/LoginIllustration.jpg';
import Image from 'next/image';
import RadioGroup from '../../components/formElements/RadioGroup/RadioGroup';
import Button from '../../components/formElements/Button/Button';

import Logo from '/public/siterka-logo-2.svg';

import './page.scss';
import Link from 'next/link';

const LoginPage = () => {
  const [vw, setVw] = useState(0);
  const [vh, setVh] = useState(0);

  useEffect(() => {
    setVw(window.innerWidth);
    setVh(window.innerHeight);
  }, []);

  console.log(vw * 0.6, vh);

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
    <>
      <div className='login-page'>
        <div className='login-image'>
          <Image src={LoginIllustration} alt='Siterka' layout='fill' />
        </div>

        <div className='login-wrapper'>
          <div className='logo'>
            <Image src={Logo} alt='Siterka' width={200} />
          </div>
          {/* <div className='login-box'>
        Log in
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder='Name'
              required={true}
              value={name}
              type='text'
              onChange={(e) => setName(e.target.value)}
            />

            <FormLabel>Email</FormLabel>
            <Input
              placeholder='Email'
              required={true}
              value={email}
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormLabel>Password</FormLabel>
            <Input placeholder='Password' type='password' />

            <Input type='submit' value='Submit' />
          </FormControl>
        </form>
      </div> */}
          <div className='register-box'>
            <h1>Create account</h1>
            <p>and become user with full access to our user data.</p>
            <form action=''>
              {/* <Input
                label='Username'
                name='username'
                type='text'
                placeholder='Username'
                required
                value={registerData.username}
                onChange={handleChange}
              /> */}
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
              <Input
                label='Confirm Password'
                name='confirmPassword'
                type='password'
                placeholder='Confirm Password'
                required
                value={registerData.confirmPassword}
                onChange={handleChange}
                // error="Password and Confirm Password don't match"
              />
              <RadioGroup
                label='Role'
                name='role'
                options={['Parent', 'Sitter']}
                // error='Please select a role'
              />

              <Button type='submit' />
            </form>

            <div className='login-link'>
              <Link href='/login'>Already have an account?</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
