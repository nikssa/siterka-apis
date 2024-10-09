import { Icons } from '@/app/assets/icons';
import IconButton from '@/components/common/IconButton/IconButton';
import SingleCheckbox from '@/components/SingleCheckbox/SingleCheckbox';
import { PostDataProps } from '@/types/types';
import './UserAbout.scss';

interface UserAboutProps extends PostDataProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  step: number;
  setStep: (step: number) => void;
}

const UserAbout = ({
  pets = false,
  specialNeeds = false,
  inOwnHouse = false,
  cleaning = false,
  cleaningChildOnly = false,
  shopping = false,
  cooking = false,
  cookingChildOnly = false,
  outWithChild = false,
  car = false,
  driversLicense = false,
  smoking = false,
  onChange,
  step,
  setStep
}: UserAboutProps) => {
  return (
    step === 5 && (
      <section className='user-about'>
        <div className='inner'>
          <h1>Give us more details about your offerings</h1>

          <div className='form-elements'>
            <SingleCheckbox
              id='pets'
              name='pets'
              label='Pets'
              checked={pets}
              onChange={onChange}
            />

            <SingleCheckbox
              id='specialNeeds'
              name='specialNeeds'
              label='Special Needs'
              checked={specialNeeds}
              onChange={onChange}
            />

            <SingleCheckbox
              id='inOwnHouse'
              name='inOwnHouse'
              label='I can babysit in my own house'
              checked={inOwnHouse}
              onChange={onChange}
            />

            <SingleCheckbox
              id='cleaning'
              name='cleaning'
              label='Cleaning'
              checked={cleaning}
              onChange={onChange}
            />

            <SingleCheckbox
              id='cleaningChildOnly'
              name='cleaningChildOnly'
              label='Cleaning Child Only'
              checked={cleaningChildOnly}
              onChange={onChange}
            />

            <SingleCheckbox
              id='shopping'
              name='shopping'
              label='Shopping'
              checked={shopping}
              onChange={onChange}
            />

            <SingleCheckbox
              id='cooking'
              name='cooking'
              label='Cooking'
              checked={cooking}
              onChange={onChange}
            />

            <SingleCheckbox
              id='cookingChildOnly'
              name='cookingChildOnly'
              label='Cooking Child Only'
              checked={cookingChildOnly}
              onChange={onChange}
            />

            <SingleCheckbox
              id='outWithChild'
              name='outWithChild'
              label='Out With Child'
              checked={outWithChild}
              onChange={onChange}
            />

            <SingleCheckbox
              id='car'
              name='car'
              label='Car'
              checked={car}
              onChange={onChange}
            />

            <SingleCheckbox
              id='driversLicense'
              name='driversLicense'
              label='Drivers License'
              checked={driversLicense}
              onChange={onChange}
            />

            <SingleCheckbox
              id='smoking'
              name='smoking'
              label='Smoking'
              checked={smoking}
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

export default UserAbout;
