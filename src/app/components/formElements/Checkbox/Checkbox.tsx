import React, { InputHTMLAttributes } from 'react';

import './Checkbox.scss';

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
        {label} {required && '*'}
      </label>

      <span className='input-line'>{error}</span>
    </div>
  );
};

export default Checkbox;
