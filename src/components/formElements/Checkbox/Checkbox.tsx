import { ChangeEvent } from 'react';
import Input from '../TextField/TextField';
import { Icons } from '@/app/assets/icons';
import './Checkbox.scss';

export type ChecksProps = {
  [key: string]: boolean;
};

export type CheckboxProps = {
  check: string;
  checks: ChecksProps;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ check, checks, onChange }: CheckboxProps) => {
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <div className='checkbox'>
      <Input
        type='checkbox'
        name={check}
        id={check}
        onChange={onChange}
        checked={checks && checks[check] ? true : false}
      />
      <label htmlFor={check}>
        {checks && checks[check] ? (
          <Icons.Checked size='18px' />
        ) : (
          <Icons.Unchecked size='18px' />
        )}
        {capitalizeFirstLetter(check)}
      </label>
    </div>
  );
};

export default Checkbox;
