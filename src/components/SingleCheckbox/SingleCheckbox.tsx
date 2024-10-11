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
  icon?: React.ReactNode;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SingleCheckbox = ({
  id,
  name,
  label,
  icon,
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
          <Icons.Checked className='checkbox-icon' size='20px' />
        ) : (
          <Icons.Unchecked
            className='checkbox-icon'
            color='var(--field-border-color)'
            size='20px'
          />
        )}
        {icon}
        <span title={label}>{label}</span>
      </label>
    </div>
  );
};

export default SingleCheckbox;
