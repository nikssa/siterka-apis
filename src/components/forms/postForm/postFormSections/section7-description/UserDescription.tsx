import { Icons } from '@/app/assets/icons';
import IconButton from '@/components/common/IconButton/IconButton';
import Button from '@/components/formElements/Button/Button';
import TextArea from '@/components/formElements/TextAreaField/TextAreaField';
import Input from '@/components/formElements/TextField/TextField';
import { ChangeEventTypes } from '@/components/forms/ProfileForm';
import { PostDataProps } from '@/types/types';

// interface UserDescriptionProps extends PostDataProps {
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

type UserDescriptionProps = PostDataProps & {
  defaultTitle: string;
  defaultDescription: string;
  onChange: (e: ChangeEventTypes) => void;
  step: number;
  setStep: (step: number) => void;
  className: string;
};

const UserDescription = ({
  title,
  defaultTitle,
  description,
  defaultDescription,
  availability,
  onChange,
  step,
  setStep,
  className
}: UserDescriptionProps) => {
  const userDescription = description ? description : defaultDescription;
  const userTitle = title ? title : defaultTitle;
  return (
    <section className={className}>
      <div className='inner'>
        <h1>Define title , describe your offerings and availability</h1>

        <div className='form-elements'>
          <Input
            type='text'
            name='title'
            label='Title'
            placeholder='Enter title'
            value={userTitle}
            onChange={onChange}
          />

          <TextArea
            name='description'
            label='Describe your offerings'
            placeholder='Enter description'
            value={userDescription}
            onChange={onChange}
          />

          <TextArea
            name='availability'
            label='Describe your availability'
            placeholder='Enter availability'
            value={availability}
            onChange={onChange}
            rows={3}
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
            <Button type='submit' label='Submit' primary />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDescription;
