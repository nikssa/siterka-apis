import React, { InputHTMLAttributes } from 'react';

import './SimpleCheckbox.scss';
import Link from 'next/link';

type SimpleCheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const SimpleCheckbox = ({
  id,
  name,
  label,
  checked,
  required,
  onChange,
  error
}: SimpleCheckboxProps) => {
  return (
    <div className='simple-checkbox'>
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

export default SimpleCheckbox;
