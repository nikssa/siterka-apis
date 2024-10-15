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
  userRole: string;
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
  className,
  userRole
}: UserAboutProps) => {
  const title =
    userRole === 'sitter'
      ? 'About your offerings'
      : 'Expectation related to siterka';
  const petsLabel =
    userRole === 'sitter' ? 'I can work with pets present' : 'Family has pets';
  const specialNeedsLabel =
    userRole === 'sitter'
      ? 'I can babysit children with the special needs'
      : 'Child has special needs';
  const inOwnHouseLabel =
    userRole === 'sitter'
      ? 'I can babysit in my own house'
      : 'We agree that siterka babysit in her own home';

  const cleaningLabel =
    userRole === 'sitter' ? 'I can do cleaning' : 'Siterka should do cleaning';
  const cleaningChildOnlyLabel =
    userRole === 'sitter'
      ? 'I can do cleaning after children only'
      : 'Siterka should do cleaning after children only';
  const shoppingLabel =
    userRole === 'sitter'
      ? 'I can do shopping'
      : 'We expect that siterka will do shopping';
  const cookingLabel =
    userRole === 'sitter'
      ? 'I can cook'
      : 'Siterka should do cooking for the family';
  const cookingChildOnlyLabel =
    userRole === 'sitter'
      ? 'I can cook for children only'
      : 'Siterka should cook for children only';
  const outWithChildLabel =
    userRole === 'sitter'
      ? 'I can go out with children'
      : 'Siterka should go out with children';
  const carLabel =
    userRole === 'sitter' ? 'I have a car' : 'Siterka should have a car';
  const driversLicenseLabel =
    userRole === 'sitter'
      ? 'I have drivers license'
      : 'Siterka should have drivers license';
  const notSmokingLabel =
    userRole === 'sitter' ? 'I do not smoke' : 'Siterka should not smoke';

  return (
    <section className={`user-about ${className}`}>
      <div className='inner'>
        <h1>{title}</h1>

        <div className='form-elements'>
          <SingleCheckbox
            id='pets'
            name='pets'
            label={petsLabel}
            icon={<Icons.Pets size='22px' />}
            checked={pets}
            onChange={onChange}
          />

          <SingleCheckbox
            id='specialNeeds'
            name='specialNeeds'
            label={specialNeedsLabel}
            checked={specialNeeds}
            onChange={onChange}
          />

          <SingleCheckbox
            id='inOwnHouse'
            name='inOwnHouse'
            label={inOwnHouseLabel}
            checked={inOwnHouse}
            onChange={onChange}
          />

          <SingleCheckbox
            id='cleaning'
            name='cleaning'
            label={cleaningLabel}
            checked={cleaning}
            onChange={onChange}
          />

          <SingleCheckbox
            id='cleaningChildOnly'
            name='cleaningChildOnly'
            label={cleaningChildOnlyLabel}
            checked={cleaningChildOnly}
            onChange={onChange}
          />

          <SingleCheckbox
            id='shopping'
            name='shopping'
            label={shoppingLabel}
            checked={shopping}
            onChange={onChange}
          />

          <SingleCheckbox
            id='cooking'
            name='cooking'
            label={cookingLabel}
            checked={cooking}
            onChange={onChange}
          />

          <SingleCheckbox
            id='cookingChildOnly'
            name='cookingChildOnly'
            label={cookingChildOnlyLabel}
            checked={cookingChildOnly}
            onChange={onChange}
          />

          <SingleCheckbox
            id='outWithChild'
            name='outWithChild'
            label={outWithChildLabel}
            checked={outWithChild}
            onChange={onChange}
          />

          <SingleCheckbox
            id='car'
            name='car'
            label={carLabel}
            checked={car}
            onChange={onChange}
          />

          <SingleCheckbox
            id='driversLicense'
            name='driversLicense'
            label={driversLicenseLabel}
            checked={driversLicense}
            onChange={onChange}
          />

          <SingleCheckbox
            id='notSmoking'
            name='notSmoking'
            label={notSmokingLabel}
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
