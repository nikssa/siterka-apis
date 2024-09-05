import React from 'react';
import './TextField.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  blurred?: string;
  error?: string;
  isHidden?: boolean;
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
    ...rest
  } = props;

  console.log('Input rendering...', rest);

  const [blurred, setBlurred] = React.useState('false');

  const handleFocused = () => {
    console.log('handleFocused');
    setBlurred('false');
  };

  const handleBlurred = () => {
    console.log('handleBlurred');
    setBlurred('true');
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
    </div>
  );
};

export default Input;
