import { Icons } from '@/app/assets/icons';
import IconButton from '@/components/common/IconButton/IconButton';
import SelectBox from '@/components/formElements/SelectBox/SelectBox';
import Input from '@/components/formElements/TextField/TextField';
import { ChangeEventTypes } from '@/components/forms/profileForm/ProfileForm';
import { EarningsRate, PostDataProps } from '@/types/types';

interface UserEarningsProps extends PostDataProps {
  onChange: (event: ChangeEventTypes) => void;
  step: number;
  setStep: (step: number) => void;
  className: string;
  userRole: string;
}

const UserEarnings = ({
  earnings,
  earningsRate,
  currency,
  onChange,
  step,
  setStep,
  className,
  userRole
}: UserEarningsProps) => {
  const title =
    userRole === 'sitter'
      ? 'How much you expect to earn?'
      : 'How much you can offer?';

  const earningsLabel = userRole === 'sitter' ? 'Earnings' : 'Sitter fee';

  return (
    <section className={className}>
      <div className='inner'>
        <h1>{title}</h1>

        <div className='form-elements'>
          <Input
            type='number'
            name='earnings'
            label={earningsLabel}
            placeholder='Enter earnings'
            value={earnings || ''}
            onChange={onChange}
          />

          <SelectBox
            id='currency'
            name='currency'
            label='Currency'
            selected={currency}
            options={['RSD', 'USD', 'EUR']}
            onChange={onChange}
          />

          <SelectBox
            id='earningsRate'
            name='earningsRate'
            label='Earnings Rate'
            selected={earningsRate}
            options={[
              EarningsRate.HOURLY,
              EarningsRate.DAILY,
              EarningsRate.WEEKLY,
              EarningsRate.MONTHLY
            ]}
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

export default UserEarnings;
