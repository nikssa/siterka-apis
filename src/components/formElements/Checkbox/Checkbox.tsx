import React, { InputHTMLAttributes } from 'react';

import './Checkbox.scss';
import Link from 'next/link';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Checkbox = ({
  id,
  name,
  label,
  checked,
  required,
  onChange,
  error
}: CheckboxProps) => {
  return (
    <div className='checkbox'>
      <input
        style={{ marginRight: '10px' }}
        type='checkbox'
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        required={required}
      />

      <label htmlFor={id}>
        <Link href='terms-and-conditions'>
          {label} {required && '*'}
        </Link>
      </label>

      <span className='input-line'>{error}</span>
    </div>
  );
};

export default Checkbox;
