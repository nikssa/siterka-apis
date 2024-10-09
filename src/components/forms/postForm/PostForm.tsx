'use client';

import {
  ChildAge,
  EarningsRate,
  Education,
  Languages,
  PostDataProps,
  UserDataProps
} from '@/types/types';
import { ChangeEvent, useState } from 'react';
import UserContactDetails from './postFormSections/section1-contact/UserContactDetails';
import UserExperience from './postFormSections/section2-experience/UserExperience';
import UserBirthday from './postFormSections/section3-birthday/UserBirthday';
import UserEducation from './postFormSections/section4-education/UserEducation';
import UserAbout from './postFormSections/section5-about/UserAbout';
import UserEarnings from './postFormSections/section6-earnings/UserEarnings';
import UserDescription from './postFormSections/section7-description/UserDescription';
import { ChangeEventTypes } from '../ProfileForm';
import './PostForm.scss';
import { calculateAge } from '@/utils/calculateAge';

type PostFormProps = {
  name: string;
  data: PostDataProps;
};

const PostForm = ({ name, data }: PostFormProps) => {
  let newData = data;
  if (
    !data.childAgeGroup ||
    (typeof data.childAgeGroup === 'object' &&
      Object.keys(data.childAgeGroup).length === 0)
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

  if (!data.languages || Object.keys(data.languages).length === 0) {
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

  console.log('postData', postData);

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
    console.log('handleChange name', e.target.name);
    console.log('handleChange type', e.target.type);

    if ('checked' in e.target && e.target.type === 'checkbox') {
      console.log('handleChange checked', e.target.checked);
      setPostData({
        ...postData,
        [e.target.name]: e.target.checked
      });
    } else {
      console.log('handleChange value', e.target.value);
      setPostData({ ...postData, [e.target.name]: e.target.value });
    }
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const date = new Date(value);

    setPostData({
      ...postData,
      [e.target.name]: date
    });
  };

  const handleChildAgeGroupChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target.name.toString();
    const childAgeGroup = {
      ...postData.childAgeGroup!,
      [target]: e.target.checked
    };
    setPostData({
      ...postData,
      childAgeGroup: childAgeGroup
    });
  };

  const handleEducationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPostData({
      ...postData,
      education: Education[e.target.value as keyof typeof Education]
    });
  };

  const handleLanguagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('handleLanguagesChange name', e.target.name);
    console.log('handleLanguagesChange value', e.target.checked);
    setPostData({
      ...postData,
      languages: {
        ...postData.languages,
        [e.target.name]: e.target.checked
      }
    });
  };

  const handleEarningsRateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPostData({
      ...postData,
      earningsRate: EarningsRate[e.target.value as keyof typeof EarningsRate]
    });
  };

  return (
    <form className='post-form' action=''>
      {/* User Contact and Location Details */}
      <UserContactDetails
        {...postData}
        onChange={handleChange}
        step={step}
        setStep={setStep}
      />

      {/* User Experience Details */}
      <UserExperience
        {...postData}
        onChange={handleChange}
        onChildAgeGroupChange={handleChildAgeGroupChange}
        step={step}
        setStep={setStep}
      />

      {/* User Birth Date */}
      <UserBirthday
        {...postData}
        onChange={handleDateChange}
        step={step}
        setStep={setStep}
      />

      {/* Education & Languages Section */}
      <UserEducation
        {...postData}
        onChange={handleChange}
        handleEducationChange={handleEducationChange}
        handleLanguagesChange={handleLanguagesChange}
        step={step}
        setStep={setStep}
      />

      {/* Special details about user offerings */}
      <UserAbout
        {...postData}
        onChange={handleChange}
        step={step}
        setStep={setStep}
      />

      {/* Earnings Section */}
      <UserEarnings
        {...postData}
        onChange={handleChange}
        handleEarningsRateChange={handleEarningsRateChange}
        step={step}
        setStep={setStep}
      />

      {/* Title and Description of the offering */}
      <UserDescription
        defaultTitle={defaultUserTitle}
        defaultDescription={defaultUserDescription}
        {...postData}
        onChange={handleChange}
        step={step}
        setStep={setStep}
      />
    </form>
  );
};

export default PostForm;
