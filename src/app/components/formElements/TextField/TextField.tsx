import './TextField.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  // name: string;
  // type: string;
  // required?: boolean;
  // placeholder?: string;
  // value: string;
  // onChange: any;
}

const Input = (props: InputProps) => {
  const {
    label,
    name,
    type,
    required,
    placeholder,
    value,
    error,
    onChange,
    ...rest
  } = props;

  return (
    <div className={`input-box ${error ? 'error' : ''}`}>
      <div className='input'>
        {label && (
          <label htmlFor={name}>
            <span>{label}</span>
          </label>
        )}

        <input
          id={name}
          name={name}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          required={required}
          {...rest}
        />
      </div>
      <span className='input-line'>{error}</span>
    </div>
  );
};

export default Input;
