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
import Checkbox from '../formElements/Checkbox/Checkbox';
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
    const dataPasswordHashed = { ...data, password: md5(data.password) };

    // console.log('dataPasswordHashed', dataPasswordHashed);

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataPasswordHashed)
      });
      //   toast.success('Registration successful');

      router.push('/registration-success?toast=success');
      //   setRegisterData(initialValue);
    } catch (error) {
      toast.error(
        `Registration failed. ${error instanceof Error && error.message}`
      );
    }
  };

  const formElement = useRef<HTMLFormElement>(null);
  const form = document.getElementById('form');

  console.log('formElement', formElement);
  console.log('form', form);

  const [isFormValid, setIsFormValid] = useState(false);

  console.log('isFormValid', isFormValid);

  useEffect(() => {
    setIsFormValid(formElement.current?.checkValidity() ?? false);
  }, [registerData]);

  const checkFormValidity = () => {
    const { name, email, password, confirmPassword, role, acceptTerms } =
      registerData;

    // const isValid = formElement.checkValidity();
    // if (
    //   name &&
    //   email &&
    //   password &&
    //   confirmPassword &&
    //   role &&
    //   acceptTerms
    //   // && formRef.checkValidity()
    // ) {
    //   return true;
    // } else {
    //   return false;
    // }
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
        label='Join'
        type='submit'
        disabled={!isFormValid}
        className={`primary ${!isFormValid ? 'disabled' : ''}`}
      />
    </form>
  );
};

export default RegisterForm;
