import { Icons } from '@/app/assets/icons';
import IconButton from '@/components/common/IconButton/IconButton';
import SelectBox from '@/components/formElements/SelectBox/SelectBox';
import Input from '@/components/formElements/TextField/TextField';
import { ChangeEventTypes } from '@/components/forms/ProfileForm';
import { EarningsRate, PostDataProps } from '@/types/types';

interface UserEarningsProps extends PostDataProps {
  onChange: (event: ChangeEventTypes) => void;
  step: number;
  setStep: (step: number) => void;
  className: string;
}

const UserEarnings = ({
  earnings,
  earningsRate,
  onChange,
  step,
  setStep,
  className
}: UserEarningsProps) => {
  return (
    <section className={className}>
      <div className='inner'>
        <h1>How much you expect to earn</h1>

        <div className='form-elements'>
          <Input
            type='number'
            name='earnings'
            label='Earnings'
            placeholder='Enter earnings'
            value={earnings}
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
