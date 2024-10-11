'use client';

import { ChildAge, Languages, PostDataProps } from '@/types/types';
import { calculateAge } from '@/utils/calculateAge';
import { ChangeEvent, useState } from 'react';
import { ChangeEventTypes } from '../ProfileForm';
import UserContactDetails from './postFormSections/section1-contact/UserContactDetails';
import UserExperience from './postFormSections/section2-experience/UserExperience';
import UserBirthday from './postFormSections/section3-birthday/UserBirthday';
import UserEducation from './postFormSections/section4-education/UserEducation';
import UserAbout from './postFormSections/section5-about/UserAbout';
import UserEarnings from './postFormSections/section6-earnings/UserEarnings';
import UserDescription from './postFormSections/section7-description/UserDescription';
import './PostForm.scss';
import loginFormAction, { postFormAction } from '@/actions/actions';
import Input from '@/components/formElements/TextField/TextField';

type PostFormProps = {
  userId: string;
  name: string;
  data: PostDataProps;
};

const PostForm = ({ userId, name, data }: PostFormProps) => {
  let newData = data;
  if (
    !data?.childAgeGroup ||
    (typeof data?.childAgeGroup === 'object' &&
      Object.keys(data?.childAgeGroup).length === 0)
  ) {
    newData = {
      ...data,
      childAgeGroup: {
        [ChildAge.NEWBORNS]: false,
        [ChildAge.INFANTS]: false,
        [ChildAge.TODDLERS]: false,
        [ChildAge.PRESCHOOLERS]: false,
        [ChildAge.SCHOOLERS]: false,
        [ChildAge.TEENS]: false
      }
    };
  }

  if (!data?.languages || Object.keys(data?.languages).length === 0) {
    newData = {
      ...newData,
      languages: {
        [Languages.serbian]: false,
        [Languages.english]: false,
        [Languages.spanish]: false,
        [Languages.german]: false,
        [Languages.french]: false,
        [Languages.italian]: false
      }
    };
  }

  const [postData, setPostData] = useState<PostDataProps>(newData);
  const [step, setStep] = useState(1);

  const userAge = calculateAge(postData.birthDate as Date);

  const defaultUserTitle = `Siterka ${name}, ${userAge}, ${postData.city}, ${postData.country}`;

  const defaultUserDescription = `Pozdrav! Moje ime je ${name}. Tražim posao siterke. Imam ${
    postData.experience
  } ${postData.experienceTimeUnit} iskustva. ${
    postData.firstAid && 'Sertifikovan pružalac prve pomoći.'
  } Živim u ${postData.city}, ${
    postData.country
  }. Javite se, očekujem Vašu poruku.`;

  const handleChange = (e: ChangeEventTypes) => {
    if ('checked' in e.target && e.target.type === 'checkbox') {
      setPostData({
        ...postData,
        [e.target.name]: e.target.checked
      });
    } else {
      setPostData({ ...postData, [e.target.name]: e.target.value });
    }
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPostData({
      ...postData,
      [e.target.name]: new Date(e.target.value)
    });
  };

  const handleChildAgeGroupChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPostData({
      ...postData,
      childAgeGroup: {
        ...postData.childAgeGroup!,
        [e.target.name]: e.target.checked
      }
    });
  };

  const handleLanguagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPostData({
      ...postData,
      languages: {
        ...postData.languages,
        [e.target.name]: e.target.checked
      }
    });
  };

  console.log('step', step);

  const postForm = async (formData: FormData) => {
    const result = await postFormAction(formData);

    // if (result.status === 200) {
    //   // Authenticate user - Create JWT session set cookie and redirect to homepage
    //   const userId = result.user?.id.toString();
    //   const user = { ...result.user, id: userId };
    //   console.log('preparing to createSession', user);
    //   // if (user && userId) {
    //   const session = await createSession(user as UserDataProps);
    //   console.log('session created', session);
    //   router.push('/');
    //   // }
    // } else {
    //   toast.error(`${result.statusText}`);
    // }
  };

  return (
    <form className='post-form' action={postForm}>
      <Input
        type='text'
        name='authorId'
        label='UserId'
        defaultValue={userId}
        hidden
      />
      {/* User Contact and Location Details */}
      <UserContactDetails
        {...postData}
        onChange={handleChange}
        step={step}
        setStep={setStep}
        className={`step ${step === 1 ? 'active' : ''} ${
          step > 1 ? 'done' : ''
        }`}
      />

      {/* User Experience Details */}
      <UserExperience
        {...postData}
        onChange={handleChange}
        onChildAgeGroupChange={handleChildAgeGroupChange}
        step={step}
        setStep={setStep}
        className={`step ${step === 2 ? 'active' : ''} ${
          step > 2 ? 'done' : ''
        } ${step < 2 ? 'waiting' : ''}`}
      />

      {/* User Birth Date */}
      <UserBirthday
        {...postData}
        onChange={handleDateChange}
        step={step}
        setStep={setStep}
        className={`step ${step === 3 ? 'active' : ''} ${
          step > 3 ? 'done' : ''
        } ${step < 3 ? 'waiting' : ''}`}
      />

      {/* Education & Languages Section */}
      <UserEducation
        {...postData}
        onChange={handleChange}
        onLanguagesChange={handleLanguagesChange}
        step={step}
        setStep={setStep}
        className={`step ${step === 4 ? 'active' : ''} ${
          step > 4 ? 'done' : ''
        } ${step < 4 ? 'waiting' : ''}`}
      />

      {/* Special details about user offerings */}
      <UserAbout
        {...postData}
        onChange={handleChange}
        step={step}
        setStep={setStep}
        className={`step ${step === 5 ? 'active' : ''} ${
          step > 5 ? 'done' : ''
        } ${step < 5 ? 'waiting' : ''}`}
      />

      {/* Earnings Section */}
      <UserEarnings
        {...postData}
        onChange={handleChange}
        step={step}
        setStep={setStep}
        className={`step ${step === 6 ? 'active' : ''} ${
          step > 6 ? 'done' : ''
        } ${step < 6 ? 'waiting' : ''}`}
      />

      {/* Title and Description of the offering */}
      <UserDescription
        defaultTitle={defaultUserTitle}
        defaultDescription={defaultUserDescription}
        {...postData}
        onChange={handleChange}
        step={step}
        setStep={setStep}
        className={`step ${step === 7 ? 'active' : ''} ${
          step > 7 ? 'done' : ''
        } ${step < 7 ? 'waiting' : ''}`}
      />
    </form>
  );
};

export default PostForm;
