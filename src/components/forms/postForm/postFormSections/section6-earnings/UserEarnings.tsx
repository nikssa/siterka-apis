import { Icons } from '@/app/assets/icons';
import IconButton from '@/components/common/IconButton/IconButton';
import Button from '@/components/formElements/Button/Button';
import SelectBox from '@/components/formElements/SelectBox/SelectBox';
import Input from '@/components/formElements/TextField/TextField';
import { EarningsRate, PostDataProps } from '@/types/types';

interface UserEarningsProps extends PostDataProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEarningsRateChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  step: number;
  setStep: (step: number) => void;
}

const UserEarnings = ({
  earnings,
  earningsRate,
  onChange,
  handleEarningsRateChange,
  step,
  setStep
}: UserEarningsProps) => {
  return (
    step === 6 && (
      <section>
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
              onChange={handleEarningsRateChange}
            />

            {/* <label htmlFor='earningsRate'>Earnings Rate</label>
            <select
              id='earningsRate'
              name='earningsRate'
              onChange={handleEarningsRateChange}
              value={earningsRate}>
              <option value={EarningsRate.HOURLY}>{EarningsRate.HOURLY}</option>
              <option value={EarningsRate.DAILY}>{EarningsRate.DAILY}</option>
              <option value={EarningsRate.WEEKLY}>{EarningsRate.WEEKLY}</option>
              <option value={EarningsRate.MONTHLY}>
                {EarningsRate.MONTHLY}
              </option>
            </select> */}

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

export default UserEarnings;
