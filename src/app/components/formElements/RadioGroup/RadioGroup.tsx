import './RadioGroup.scss';

interface RadioGroupProps {
  name: string;
  label: string;
  options: string[];
}

const RadioGroup = (props: RadioGroupProps) => {
  const { name, label, options } = props;
  const radioButtons = options.map((option) => (
    <div className='radio' key={option}>
      <label htmlFor={option}>
        <input type='radio' name={name} value={option} />
        {option}
      </label>
    </div>
  ));
  return radioButtons;
};

export default RadioGroup;
