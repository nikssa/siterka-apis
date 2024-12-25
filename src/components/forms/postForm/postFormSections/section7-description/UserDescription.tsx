import { Icons } from '@/app/assets/icons';
import IconButton from '@/components/common/IconButton/IconButton';
import Button from '@/components/formElements/Button/Button';
import TextArea from '@/components/formElements/TextAreaField/TextAreaField';
import Input from '@/components/formElements/TextField/TextField';
import { ChangeEventTypes } from '@/components/forms/profileForm/ProfileForm';
import { PostDataProps } from '@/types/types';
import { calculateAge } from '@/utils/calculateAge';

// interface UserDescriptionProps extends PostDataProps {
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

type UserDescriptionProps = PostDataProps & {
  firstName: string;
  onChange: (e: ChangeEventTypes) => void;
  step: number;
  setStep: (step: number) => void;
  className: string;
  userRole: string;
};

const UserDescription = ({
  firstName,
  title,
  description,
  birthDate,
  address,
  city,
  country,
  experience,
  experienceTimeUnit,
  firstAid,
  availability,
  onChange,
  step,
  setStep,
  className,
  userRole
}: UserDescriptionProps) => {
  const userAge = calculateAge(birthDate as Date);

  const defaultSitterTitle =
    title || `Siterka ${firstName}, ${userAge} years, ${city}, ${country}`;
  const defaultSitterDescription =
    description ||
    `Pozdrav! Moje ime je ${firstName}. Tražim posao siterke. Imam ${experience} ${experienceTimeUnit} iskustva. ${
      firstAid ? 'Sertifikovan pružalac prve pomoći.' : ''
    } Živim u ${city}, ${country}. Javite se, očekujem Vašu poruku.`;

  const defaultParentTitle =
    title ||
    `Roditelj ${firstName}, ${city}, ${country} ${
      address ? `, ${address}` : ''
    }`;
  const defaultParentDescription =
    description ||
    `Pozdrav! Moje ime je ${firstName}. Tražim/o bebisiterku sa min ${experience} ${experienceTimeUnit} iskustva. ${
      firstAid ? 'Želimo da ima položenu prvu pomoć.' : ''
    } Živim/o u ${city}, ${country}. Javite se, očekujem/o Vašu poruku.`;

  const userTitle = title
    ? title
    : userRole === 'sitter'
    ? defaultSitterTitle
    : defaultParentTitle;
  const userDescription = description
    ? description
    : userRole === 'sitter'
    ? defaultSitterDescription
    : defaultParentDescription;

  const postTitle =
    userRole === 'sitter'
      ? 'Define title , describe your offerings and availability'
      : 'Define title , describe your demands and needs';

  const descriptionLabel =
    userRole === 'sitter' ? 'Describe your offerings' : 'Describe your demands';

  const availabilityLabel =
    userRole === 'sitter'
      ? 'Describe your availability'
      : "Describe how often you need siterka's services";

  return (
    <section className={className}>
      <div className='inner'>
        <h1>{postTitle}</h1>

        <div className='form-elements'>
          <Input
            type='text'
            name='title'
            label='Define post title'
            placeholder='Enter title'
            value={userTitle}
            onChange={onChange}
          />

          <TextArea
            name='description'
            label={descriptionLabel}
            placeholder='Enter description'
            value={userDescription}
            onChange={onChange}
          />

          <TextArea
            name='availability'
            label={availabilityLabel}
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
