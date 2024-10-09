import { Icons } from '@/app/assets/icons';
import IconButton from '@/components/common/IconButton/IconButton';
import Button from '@/components/formElements/Button/Button';
import MultiCheckbox from '@/components/formElements/MultiCheckbox/MultiCheckbox';
import SelectBox from '@/components/formElements/SelectBox/SelectBox';
import Checkbox from '@/components/formElements/Checkbox/Checkbox';
import Input from '@/components/formElements/TextField/TextField';
import { Education, LangProps, Languages, PostDataProps } from '@/types/types';
import SingleCheckbox from '@/components/SingleCheckbox/SingleCheckbox';

interface UserEducationProps extends PostDataProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEducationChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleLanguagesChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  step: number;
  setStep: (step: number) => void;
}

const UserEducation = ({
  education,
  sitterCourse = false,
  firstAid = false,
  languages,
  otherLanguages,
  onChange,
  handleEducationChange,
  handleLanguagesChange,
  step,
  setStep
}: UserEducationProps) => {
  const langs = Object.keys(languages!).filter(
    (key) => languages?.[key as keyof typeof languages]
  );

  return (
    step === 4 && (
      <section>
        <div className='inner'>
          <h1>What are your education details?</h1>

          <div className='form-elements'>
            <SelectBox
              id='education'
              name='education'
              label='Education'
              options={Object.values(Education)}
              selected={education}
              onChange={handleEducationChange}
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
              onChange={handleLanguagesChange}
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

export default UserEducation;
