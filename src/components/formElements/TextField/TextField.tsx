import React from 'react';
import { PrismaClient } from '@prisma/client';
import './TextField.scss';

const prisma = new PrismaClient();

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  blurred?: string;
  error?: string;
  isHidden?: boolean;
  isUnique?: boolean;
}

const Input = (props: InputProps) => {
  const {
    label,
    name,
    type,
    required,
    pattern,
    placeholder,
    value,
    error,
    onChange,
    isHidden,
    isUnique,
    ...rest
  } = props;

  const [blurred, setBlurred] = React.useState('false');
  const [exists, setExists] = React.useState(false);

  const handleFocused = () => {
    setBlurred('false');
    setExists(false);
  };

  const handleBlurred = async (e: React.FocusEvent<HTMLInputElement>) => {
    setBlurred('true');

    const isValid = e.target.checkValidity();
    if (isUnique && isValid) {
      const name = e.target.name;
      const value = e.target.value;
      try {
        const res = await fetch(`/api/exists/${name}/${value}`);
        const data = await res.json();
        if (data) {
          setExists(true);
        } else {
          setExists(false);
        }
      } catch (error) {
        setExists(false);
      }
    }
  };

  return (
    <div className={`input-box ${isHidden ? 'hidden' : ''}`}>
      <div className='input'>
        {label && (
          <label htmlFor={name}>
            <span>
              {label} {required && '*'}
            </span>
          </label>
        )}

        <input
          id={name}
          name={name}
          type={type}
          onChange={onChange}
          onFocus={handleFocused}
          onBlur={handleBlurred}
          value={value}
          placeholder={placeholder}
          required={required}
          pattern={pattern}
          blurred={blurred}
          {...rest}
        />
      </div>
      <span className='input-line'>{error}</span>
      {exists && (
        <span className='input-line unique'>
          "{name}" with a value of "{value}" already exists
        </span>
      )}
    </div>
  );
};

export default Input;
