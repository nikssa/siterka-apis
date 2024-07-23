import './RadioGroup.scss';

interface RadioGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // name: string;
  label: string;
  options: string[];
  error?: string;
}

const RadioGroup = (props: RadioGroupProps) => {
  const { label, options, error, ...rest } = props;
  const radioButtons = options.map((option) => (
    <label htmlFor={option} key={option}>
      <input type='radio' id={option} name={label} value={option} {...rest} />
      {option}
    </label>
  ));
  return (
    <div className={`radio-group-box ${error ? 'error' : ''}`}>
      <div className='radio-group'>
        <div className='radio-group-label'>
          <span>{label}</span>
        </div>
        {radioButtons}
      </div>
      <span className='input-line'>{error}</span>
    </div>
  );
};

export default RadioGroup;
