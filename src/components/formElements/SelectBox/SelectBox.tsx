import { TimeUnits } from '@/types/types';
import './SelectBox.scss';

type SelectBoxProps = {
  id: string;
  name: string;
  label?: string;
  required?: boolean;
  options: string[];
  selected?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectBox = ({
  id,
  name,
  label,
  required,
  options,
  // selected = TimeUnits.years,
  selected,
  onChange
}: SelectBoxProps) => {
  return (
    <div className='select-box'>
      <div className='select'>
        {label && (
          <label htmlFor={name}>
            <span>
              {label} {required && '*'}
            </span>
          </label>
        )}
        <select id={id} name={name} value={selected} onChange={onChange}>
          {options.map((option: string) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectBox;
