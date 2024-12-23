import { Icons } from '@/app/assets/icons';
import IconButton from '@/components/common/IconButton/IconButton';
import Input from '@/components/formElements/TextField/TextField';
import { PostDataProps } from '@/types/types';
import { ChangeEvent } from 'react';

// interface UserContactDetailsProps extends PostDataProps {
//   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
// }

type UserContactDetailsProps = PostDataProps & {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  step: number;
  setStep: (step: number) => void;
  className: string;
};

const UserContactDetails = ({
  email,
  phone,
  country,
  city,
  address,
  onChange,
  step,
  setStep,
  className
}: UserContactDetailsProps) => {
  return (
    <section className={className}>
      <div className='inner'>
        <h1>What are your contact details?</h1>
        <div className='form-elements'>
          <Input
            type='text'
            name='email'
            label='Email'
            placeholder='Enter email'
            value={email || ''}
            onChange={onChange}
            helpText='Provide email address (other then the one you enter in your profile) where people can reach you'
          />

          <Input
            type='text'
            name='phone'
            label='Phone'
            placeholder='Enter phone'
            value={phone || ''}
            onChange={onChange}
            required={true}
          />
          <Input
            type='text'
            name='country'
            label='Country'
            placeholder='Enter country'
            value={country || ''}
            onChange={onChange}
            required={true}
          />
          <Input
            type='text'
            name='city'
            label='City'
            placeholder='Enter city'
            value={city || ''}
            onChange={onChange}
            required={true}
          />
          <Input
            type='text'
            name='address'
            label='Address'
            placeholder='Enter address'
            value={address || ''}
            onChange={onChange}
          />

          <div className='buttons'>
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

export default UserContactDetails;
