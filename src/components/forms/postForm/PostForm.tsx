'use client';

import { ChildAge, Languages, PostDataProps, Role } from '@/types/types';
import { calculateAge } from '@/utils/calculateAge';
import { ChangeEvent, useState } from 'react';
import { ChangeEventTypes } from '../profileForm/ProfileForm';
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
import { toast } from 'react-toastify';

type PostFormProps = {
  userId: string;
  userRole: string;
  firstName: string;
  data: PostDataProps;
};

const PostForm = ({ userId, userRole, firstName, data }: PostFormProps) => {
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
  const stepsTotal = userRole === Role.SITTER ? 7 : 6;
  const [step, setStep] = useState(1);

  const steps =
    userRole === Role.SITTER
      ? {
          UserContactDetails: 1,
          UserExperience: 2,
          UserBirthday: 3,
          UserEducation: 4,
          UserAbout: 5,
          UserEarnings: 6,
          UserDescription: 7
        }
      : {
          UserContactDetails: 1,
          UserExperience: 2,
          UserEducation: 3,
          UserAbout: 4,
          UserEarnings: 5,
          UserDescription: 6
        };

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

  const postForm = async (formData: FormData) => {
    const result = await postFormAction(formData);

    if (result.status === 200) {
      // router.push('/');
      toast.success(`You published a job successfully. ${result.statusText}`);
      // TODO: redirect to public job page
    } else {
      toast.error(`${result.statusText}`);
    }
  };

  return (
    <>
      <div className='form-progress-steps'>
        {Array.from({ length: stepsTotal }).map((_, index) => {
          console.log('step', step);
          console.log('index', index);
          return (
            <div
              key={index}
              style={{ width: `${100 / stepsTotal}%` }}
              className={`progress-step ${index + 1 < step ? 'done' : ''} ${
                index + 1 === step ? 'active' : ''
              }`}>
              {index + 1 === step && <span>{`${step} / ${stepsTotal}`}</span>}
            </div>
          );
        })}
      </div>
      <form className='post-form' action={postForm}>
        <Input
          type='text'
          name='authorId'
          label='User Id'
          defaultValue={userId}
          isHidden
        />

        {/* User Contact and Location Details */}
        <UserContactDetails
          {...postData}
          onChange={handleChange}
          step={step}
          setStep={setStep}
          className={`step ${
            step === steps.UserContactDetails ? 'active' : ''
          } ${step > 1 ? 'done' : ''}`}
        />

        {/* User Experience Details */}
        <UserExperience
          {...postData}
          onChange={handleChange}
          onChildAgeGroupChange={handleChildAgeGroupChange}
          step={step}
          setStep={setStep}
          className={`step ${step === steps.UserExperience ? 'active' : ''} ${
            step > steps.UserExperience ? 'done' : ''
          } ${step < steps.UserExperience ? 'waiting' : ''}`}
          userRole={userRole}
        />

        {/* User Birth Date */}
        {userRole === Role.SITTER && steps.UserBirthday && (
          <UserBirthday
            {...postData}
            onChange={handleDateChange}
            step={step}
            setStep={setStep}
            className={`step ${step === steps.UserBirthday ? 'active' : ''} ${
              step > steps.UserBirthday ? 'done' : ''
            } ${step < steps.UserBirthday ? 'waiting' : ''}`}
          />
        )}

        {/* Education & Languages Section */}
        <UserEducation
          {...postData}
          onChange={handleChange}
          onLanguagesChange={handleLanguagesChange}
          step={step}
          setStep={setStep}
          className={`step ${step === steps.UserEducation ? 'active' : ''} ${
            step > steps.UserEducation ? 'done' : ''
          } ${step < steps.UserEducation ? 'waiting' : ''}`}
          userRole={userRole}
        />

        {/* Special details about user offerings */}
        <UserAbout
          {...postData}
          onChange={handleChange}
          step={step}
          setStep={setStep}
          className={`step ${step === steps.UserAbout ? 'active' : ''} ${
            step > steps.UserAbout ? 'done' : ''
          } ${step < steps.UserAbout ? 'waiting' : ''}`}
          userRole={userRole}
        />

        {/* Earnings Section */}
        <UserEarnings
          {...postData}
          onChange={handleChange}
          step={step}
          setStep={setStep}
          className={`step ${step === steps.UserEarnings ? 'active' : ''} ${
            step > steps.UserEarnings ? 'done' : ''
          } ${step < steps.UserEarnings ? 'waiting' : ''}`}
          userRole={userRole}
        />

        {/* Title and Description of the offering */}
        <UserDescription
          firstName={firstName}
          {...postData}
          onChange={handleChange}
          step={step}
          setStep={setStep}
          className={`step ${step === steps.UserDescription ? 'active' : ''} ${
            step > steps.UserDescription ? 'done' : ''
          } ${step < steps.UserDescription ? 'waiting' : ''}`}
          userRole={userRole}
        />
      </form>
    </>
  );
};

export default PostForm;
