import { Icons } from '@/app/assets/icons';
import SingleCheckbox from '@/components/SingleCheckbox/SingleCheckbox';
import IconButton from '@/components/common/IconButton/IconButton';
import MultiCheckbox from '@/components/formElements/MultiCheckbox/MultiCheckbox';
import SelectBox from '@/components/formElements/SelectBox/SelectBox';
import Input from '@/components/formElements/TextField/TextField';
import { ChangeEventTypes } from '@/components/forms/ProfileForm';
import { Education, LangProps, PostDataProps } from '@/types/types';

interface UserEducationProps extends PostDataProps {
  onChange: (event: ChangeEventTypes) => void;
  onLanguagesChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  step: number;
  setStep: (step: number) => void;
  className: string;
}

const UserEducation = ({
  education,
  sitterCourse = false,
  firstAid = false,
  languages,
  otherLanguages,
  onChange,
  onLanguagesChange,
  step,
  setStep,
  className
}: UserEducationProps) => {
  const langs = Object.keys(languages!).filter(
    (key) => languages?.[key as keyof typeof languages]
  );

  return (
    <section className={className}>
      <div className='inner'>
        <h1>What are your education details?</h1>

        <div className='form-elements'>
          <SelectBox
            id='education'
            name='education'
            label='Education'
            options={Object.values(Education)}
            selected={education}
            onChange={onChange}
          />

          <SingleCheckbox
            id='sitterCourse'
            name='sitterCourse'
            label='Do you have a sitter course?'
            checked={sitterCourse}
            onChange={onChange}
          />

          <SingleCheckbox
            id='firstAid'
            name='firstAid'
            label='Have you finished a first aid course?'
            checked={firstAid}
            onChange={onChange}
          />

          <MultiCheckbox
            label='In which languages you can converse with parents and children'
            checks={languages as LangProps}
            onChange={onLanguagesChange}
          />

          <Input
            type='text'
            name='otherLanguages'
            label='Other Languages'
            placeholder='Enter other languages'
            value={otherLanguages}
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

export default UserEducation;
