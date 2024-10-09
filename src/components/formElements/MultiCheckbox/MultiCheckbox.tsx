import { ChildAge, ChildAgeGroupProps } from '@/types/types';
import { ChangeEvent } from 'react';
import Checkbox, { ChecksProps } from '../Checkbox/Checkbox';
import './MultiCheckbox.scss';

type MultiCheckboxProps = {
  label: string;
  checks: ChecksProps;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const MultiCheckbox = ({ label, checks, onChange }: MultiCheckboxProps) => {
  const checksArray = Object.keys(checks as ChecksProps);

  return (
    <div className='checks'>
      <label htmlFor='checks'>
        <span>{label}</span>
      </label>

      {checksArray?.map((check) => (
        <Checkbox
          check={check}
          checks={checks as ChecksProps}
          onChange={onChange}
          key={check}
        />
      ))}
    </div>
  );
};

export default MultiCheckbox;
