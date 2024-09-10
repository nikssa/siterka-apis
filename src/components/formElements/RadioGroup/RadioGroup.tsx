import './RadioGroup.scss';

interface RadioGroupProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  options: string[];
  error?: string;
}

const RadioGroup = (props: RadioGroupProps) => {
  const { label, name, options, value, onChange, required, error, ...rest } =
    props;

  const radioButtons = options.map((option) => {
    const checked = option === value;
    return (
      <label htmlFor={option} key={option}>
        <input
          type='radio'
          id={option}
          name={name}
          value={option}
          onChange={onChange}
          checked={checked}
          required={required}
          {...rest}
        />
        {option}
      </label>
    );
  });

  return (
    <div className={`radio-group-box ${error ? 'error' : ''}`}>
      <div className='radio-group'>
        <div className='radio-group-label'>
          <span>
            {label} {required && '*'}
          </span>
        </div>
        {radioButtons}
      </div>
      <span className='input-line'>{error}</span>
    </div>
  );
};

export default RadioGroup;
