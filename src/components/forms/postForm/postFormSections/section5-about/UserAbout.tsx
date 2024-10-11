import { Icons } from '@/app/assets/icons';
import IconButton from '@/components/common/IconButton/IconButton';
import SingleCheckbox from '@/components/SingleCheckbox/SingleCheckbox';
import { PostDataProps } from '@/types/types';
import './UserAbout.scss';

interface UserAboutProps extends PostDataProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  step: number;
  setStep: (step: number) => void;
  className: string;
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
  notSmoking = false,
  onChange,
  step,
  setStep,
  className
}: UserAboutProps) => {
  return (
    <section className={`user-about ${className}`}>
      <div className='inner'>
        <h1>Give us more details about your offerings</h1>

        <div className='form-elements'>
          <SingleCheckbox
            id='pets'
            name='pets'
            label='I can work with pets present'
            icon={<Icons.Pets size='22px' />}
            checked={pets}
            onChange={onChange}
          />

          <SingleCheckbox
            id='specialNeeds'
            name='specialNeeds'
            label='I can babysit persons with the special needs'
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
            label='I can do cleaning'
            checked={cleaning}
            onChange={onChange}
          />

          <SingleCheckbox
            id='cleaningChildOnly'
            name='cleaningChildOnly'
            label='I want to clean but after the children only'
            checked={cleaningChildOnly}
            onChange={onChange}
          />

          <SingleCheckbox
            id='shopping'
            name='shopping'
            label='I can do shopping for the family'
            checked={shopping}
            onChange={onChange}
          />

          <SingleCheckbox
            id='cooking'
            name='cooking'
            label='I want to cook for the family'
            checked={cooking}
            onChange={onChange}
          />

          <SingleCheckbox
            id='cookingChildOnly'
            name='cookingChildOnly'
            label='I want to cook but for children only'
            checked={cookingChildOnly}
            onChange={onChange}
          />

          <SingleCheckbox
            id='outWithChild'
            name='outWithChild'
            label='I want to take the kids outside'
            checked={outWithChild}
            onChange={onChange}
          />

          <SingleCheckbox
            id='car'
            name='car'
            label='I have a car'
            checked={car}
            onChange={onChange}
          />

          <SingleCheckbox
            id='driversLicense'
            name='driversLicense'
            label='I have a drivers license'
            checked={driversLicense}
            onChange={onChange}
          />

          <SingleCheckbox
            id='notSmoking'
            name='notSmoking'
            label='I do not smoke'
            checked={notSmoking}
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

export default UserAbout;
