import React, { useEffect } from 'react';
import './RadioGroup.scss';
import { ChangeEventTypes } from '../../forms/ProfileForm';

interface RadioGroupProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  // name: string;
  // value: string | undefined;
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

  // const [radioButtonsRender, setRadioButtonsRender] = React.useState<
  //   JSX.Element[] | null
  // >(null);

  // // console.log('options', options);

  // useEffect(() => {
  //   const radioButtons = options.map((option) => {
  //     const checked = option === value;

  //     return (
  //       <label htmlFor={option} key={option}>
  //         <input
  //           type='radio'
  //           id={option}
  //           name={name}
  //           value={option}
  //           onChange={onChange}
  //           checked={checked}
  //         />
  //         {option}
  //       </label>
  //     );
  //   });
  //   setRadioButtonsRender(radioButtons);
  // }, [value]);

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
