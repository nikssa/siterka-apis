import { ChangeEvent } from 'react';
import Input from '@/components/formElements/TextField/TextField';
import { Icons } from '@/app/assets/icons';
import './SingleCheckbox.scss';

export type ChecksProps = {
  [key: string]: boolean;
};

export type SingleCheckboxProps = {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SingleCheckbox = ({
  id,
  name,
  label,
  checked,
  onChange
}: SingleCheckboxProps) => {
  return (
    <div className='single-checkbox'>
      <Input
        type='checkbox'
        id={id}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>
        {checked ? (
          <Icons.Checked size='20px' />
        ) : (
          <Icons.Unchecked color='var(--field-border-color)' size='20px' />
        )}
        <span>{label}</span>
      </label>
    </div>
  );
};

export default SingleCheckbox;
