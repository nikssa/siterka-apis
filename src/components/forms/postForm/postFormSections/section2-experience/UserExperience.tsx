import { Icons } from '@/app/assets/icons';
import IconButton from '@/components/common/IconButton/IconButton';
import MultiCheckbox from '@/components/formElements/MultiCheckbox/MultiCheckbox';
import SelectBox from '@/components/formElements/SelectBox/SelectBox';
import Input from '@/components/formElements/TextField/TextField';
import { ChangeEventTypes } from '@/components/forms/profileForm/ProfileForm';
import { ChildAgeGroupProps, PostDataProps, TimeUnits } from '@/types/types';

interface UserExperienceProps extends PostDataProps {
  onChange: (event: ChangeEventTypes) => void;
  onChildAgeGroupChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  step: number;
  setStep: (step: number) => void;
  className: string;
  userRole: string;
}

const UserExperience = ({
  experience,
  experienceTimeUnit,
  numberOfChildren = 1,
  childAgeGroup,
  onChange,
  onChildAgeGroupChange,
  step,
  setStep,
  className,
  userRole = 'parent'
}: UserExperienceProps) => {
  const title =
    userRole === 'sitter'
      ? 'Tell us about your experience'
      : 'Tell us about your expectations from siterka';
  const experienceLabel =
    userRole === 'sitter'
      ? 'How many years/months of experience do you have?'
      : 'How many years/months of experience siterka should have?';

  const ageGroupsLabel =
    userRole === 'sitter'
      ? 'Which age groups you can babysit?'
      : 'Which age groups siterka should babysit?';

  const numberOfChildrenLabel =
    userRole === 'sitter'
      ? 'How many children can you babysit?'
      : 'How many children siterka should babysit?';

  console.log('experienceTimeUnit', experienceTimeUnit);

  return (
    <section className={className}>
      <div className='inner'>
        <h1>{title}</h1>
        <div className='form-elements'>
          <Input
            type='number'
            name='experience'
            label={experienceLabel}
            placeholder='Enter number of years or months'
            value={experience || ''}
            min={0}
            required
            onChange={onChange}
          />

          <SelectBox
            id='experienceTimeUnit'
            name='experienceTimeUnit'
            label='Time unit'
            required
            options={[TimeUnits.months, TimeUnits.years]}
            selected={experienceTimeUnit}
            onChange={onChange}
          />

          <MultiCheckbox
            label={ageGroupsLabel}
            checks={childAgeGroup as ChildAgeGroupProps}
            onChange={onChildAgeGroupChange}
          />

          <Input
            type='number'
            name='numberOfChildren'
            label={numberOfChildrenLabel}
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
              onClick={(e) => {
                e.preventDefault();
                setStep(step - 1);
                window.scrollTo(0, 0);
              }}
            />
            <IconButton
              label='Next'
              iconPosition='right'
              icon={<Icons.Next color='#fefefe' size='20px' />}
              primary
              onClick={(e) => {
                e.preventDefault();
                setStep(step + 1);
                window.scrollTo(0, 0);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserExperience;
