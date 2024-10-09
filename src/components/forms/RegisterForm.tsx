'use client';

import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState
} from 'react';
import Input from '../formElements/TextField/TextField';
import RadioGroup from '../formElements/RadioGroup/RadioGroup';
import Checkbox from '../formElements/SimpleCheckbox/SimpleCheckbox';
import Button from '../formElements/Button/Button';
import Link from 'next/link';
import { toast } from 'react-toastify';
import md5 from 'md5';
import { useRouter } from 'next/navigation';

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

const RegisterForm = () => {
  const router = useRouter();

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

  const formElement = useRef<HTMLFormElement>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(formElement.current?.checkValidity() ?? false);
  }, [registerData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value =
      e.target.type == 'checkbox' ? e.target.checked : e.target.value;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // remove confirmPassword from the object 'registerData' and send it to the server
    const { confirmPassword, ...data } = registerData;
    // hash password before sending it to the server
    const dataPasswordHashed = { ...data, password: md5(data.password) };

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataPasswordHashed)
      });

      if (response.status !== 200) {
        toast.error(
          `Registration failed. Status code: ${response.status}. Status text: ${response.statusText}`
        );
        // return;
      } else {
        router.push('/registration-success?toast=success');
      }
    } catch (error) {
      toast.error(
        `Registration failed. ${error instanceof Error && error.message}`
      );
    }
  };

  return (
    <form id='form' ref={formElement} action='' onSubmit={handleSubmit}>
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
        isUnique={true}
      />
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
        isUnique={true}
      />
      <Input
        label='Password'
        name='password'
        type='password'
        placeholder='Password'
        pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$'
        required
        value={registerData.password}
        onChange={handleChange}
        error='Must be between 8-20 characters long. At least one uppercase letter, one lowercase letter, and one number.'
      />
      <Input
        label='Confirm Password'
        name='confirmPassword'
        type='password'
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

      <Button
        disabled={!isFormValid}
        className={`${!isFormValid ? 'disabled' : ''}`}
        primary={true}
        label='Join'
        type='submit'
      />
    </form>
  );
};

export default RegisterForm;
