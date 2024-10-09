import { Icons } from '@/app/assets/icons';
import IconButton from '@/components/common/IconButton/IconButton';
import Button from '@/components/formElements/Button/Button';
import MultiCheckbox from '@/components/formElements/MultiCheckbox/MultiCheckbox';
import SelectBox from '@/components/formElements/SelectBox/SelectBox';
import Input from '@/components/formElements/TextField/TextField';
import { ChangeEventTypes } from '@/components/forms/ProfileForm';
import { ChildAgeGroupProps, PostDataProps, TimeUnits } from '@/types/types';

interface UserExperienceProps extends PostDataProps {
  onChange: (event: ChangeEventTypes) => void;
  onChildAgeGroupChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  step: number;
  setStep: (step: number) => void;
}

const UserExperience = ({
  experience,
  experienceTimeUnit,
  numberOfChildren,
  childAgeGroup,
  onChange,
  onChildAgeGroupChange,
  step,
  setStep
}: UserExperienceProps) => {
  return (
    step === 2 && (
      <section>
        <div className='inner'>
          <h1>Tell us about your experience</h1>
          <div className='form-elements'>
            <Input
              type='number'
              name='experience'
              label='How many years/months of experience do you have?'
              placeholder='Enter number of years or months'
              value={experience}
              min={1}
              required
              onChange={onChange}
            />

            <SelectBox
              id='experienceTimeUnit'
              name='experienceTimeUnit'
              label='Time unit'
              required
              options={[TimeUnits.MONTHS, TimeUnits.YEARS]}
              selected={experienceTimeUnit}
              onChange={onChange}
            />

            <MultiCheckbox
              label='Which age groups you can babysit?'
              checks={childAgeGroup as ChildAgeGroupProps}
              onChange={onChildAgeGroupChange}
            />

            <Input
              type='number'
              name='numberOfChildren'
              label='How many children can you babysit?n'
              placeholder='Enter number of children'
              value={numberOfChildren}
              min={1}
              max={6}
              required
              onChange={onChange}
            />

            <div className='buttons'>
              <IconButton
                // label='Go back'
                iconPosition='left'
                icon={<Icons.Back color='#fefefe' size='20px' />}
                onClick={() => setStep(step - 1)}
              />
              <IconButton
                label='Next'
                iconPosition='right'
                icon={<Icons.Next color='#fefefe' size='20px' />}
                primary
                onClick={() => setStep(step + 1)}
              />
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default UserExperience;
