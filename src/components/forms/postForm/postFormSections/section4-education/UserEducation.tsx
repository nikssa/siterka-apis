import { Icons } from '@/app/assets/icons';
import SingleCheckbox from '@/components/SingleCheckbox/SingleCheckbox';
import IconButton from '@/components/common/IconButton/IconButton';
import MultiCheckbox from '@/components/formElements/MultiCheckbox/MultiCheckbox';
import SelectBox from '@/components/formElements/SelectBox/SelectBox';
import Input from '@/components/formElements/TextField/TextField';
import { ChangeEventTypes } from '@/components/forms/profileForm/ProfileForm';
import { Education, LangProps, PostDataProps } from '@/types/types';

interface UserEducationProps extends PostDataProps {
  onChange: (event: ChangeEventTypes) => void;
  onLanguagesChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  step: number;
  setStep: (step: number) => void;
  className: string;
  userRole: string;
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
  className,
  userRole
}: UserEducationProps) => {
  const title =
    userRole === 'sitter'
      ? 'What are your education details?'
      : 'Siterka education expectations?';

  const educationLabel =
    userRole === 'sitter' ? 'Education' : 'You expect that siterka will have';

  const sitterCourseLabel =
    userRole === 'sitter'
      ? 'Do you have a sitter course?'
      : 'Do you expect that siterka will have a sitter course?';

  const firstAidLabel =
    userRole === 'sitter'
      ? 'Have you finished a First Aid course?'
      : 'Do you expect that siterka will have a First Aid course?';

  const languagesLabel =
    userRole === 'sitter'
      ? 'In which languages you can converse with parents and children?'
      : 'In which languages siterka need to be proficient?';

  return (
    <section className={className}>
      <div className='inner'>
        <h1>{title}</h1>

        <div className='form-elements'>
          <SelectBox
            id='education'
            name='education'
            label={educationLabel}
            options={Object.values(Education)}
            selected={education}
            onChange={onChange}
          />

          <SingleCheckbox
            id='sitterCourse'
            name='sitterCourse'
            label={sitterCourseLabel}
            checked={sitterCourse}
            onChange={onChange}
          />

          <SingleCheckbox
            id='firstAid'
            name='firstAid'
            label={firstAidLabel}
            checked={firstAid}
            onChange={onChange}
          />

          <MultiCheckbox
            label={languagesLabel}
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
