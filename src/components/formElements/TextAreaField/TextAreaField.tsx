import './TextAreaField.scss';

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  // name: string;
  // type: string;
  // required?: boolean;
  // placeholder?: string;
  // value: string;
  // onChange: any;
}

const TextArea = (props: TextAreaProps) => {
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

        <textarea
          id={name}
          name={name}
          rows={5}
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

export default TextArea;
