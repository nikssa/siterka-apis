import { Icons } from '@/app/assets/icons';
import IconButton from '@/components/common/IconButton/IconButton';
import Button from '@/components/formElements/Button/Button';
import Input from '@/components/formElements/TextField/TextField';
import { PostDataProps } from '@/types/types';
import { ChangeEvent } from 'react';

interface UserBirthdayProps extends PostDataProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  step: number;
  setStep: (step: number) => void;
}

const UserBirthday = ({
  birthDate,
  onChange,
  step,
  setStep
}: UserBirthdayProps) => {
  const birthday = birthDate && new Date(birthDate);

  const birthdayFormatted = birthday
    ? `${birthday.getFullYear()}-${(birthday.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${birthday.getDate().toString().padStart(2, '0')}`
    : '';

  return (
    step === 3 && (
      <section>
        <div className='inner'>
          <h1>When you were born?</h1>
          <div className='form-elements'>
            <Input
              type='date'
              name='birthDate'
              label='Birth Date'
              placeholder='Enter birth date'
              value={birthdayFormatted}
              min={'1900-01-01'}
              max={'2006-10-01'}
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

export default UserBirthday;
