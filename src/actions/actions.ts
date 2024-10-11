'use server';

import { PostDataProps } from '@/types/types';
import {
  EarningsRate,
  Education,
  PrismaClient,
  TimeUnits,
  Post
} from '@prisma/client';
import md5 from 'md5';

const prisma = new PrismaClient();

export default async function loginFormAction(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  const users = await prisma.user.findMany();
  const user = users.find(
    // (user) => user.email === email && user.password === password
    (user) => user.email === email && user.password === md5(password as string)
  );

  if (!user) {
    return {
      status: 404,
      statusText: 'User email or password is incorrect',
      success: false,
      user: null
    };
  } else {
    return {
      status: 200,
      statusText: 'Login successful',
      success: true,
      user
    };
  }
}

export async function postFormAction(formData: FormData) {
  // const languages = formData.getAll('languages');
  // const childAgeGroup = formData.getAll('childAgeGroup');
  // console.log('languages', languages);
  // console.log('childAgeGroup', childAgeGroup);

  const languages = {
    serbian: (formData.get('serbian') as string) === 'true',
    english: (formData.get('english') as string) === 'true',
    spanish: (formData.get('spanish') as string) === 'true',
    german: (formData.get('german') as string) === 'true',
    french: (formData.get('french') as string) === 'true',
    italian: (formData.get('italian') as string) === 'true'
  };

  const serbian = formData.get('serbian') as string;
  console.log('serbian', serbian);
  const english = formData.get('english') as string;
  console.log('english', english);

  const childAgeGroup = {
    newborns: (formData.get('newborns') as string) === 'true',
    infants: (formData.get('infants') as string) === 'true',
    toddlers: (formData.get('toddlers') as string) === 'true',
    preschoolers: (formData.get('preschoolers') as string) === 'true',
    schoolers: (formData.get('schoolers') as string) === 'true',
    teens: (formData.get('teens') as string) === 'true'
  };

  console.log('languages', languages);
  console.log('childAgeGroup', childAgeGroup);

  const TimeUnits = formData.get('experienceTimeUnit');

  console.log('TimeUnits', TimeUnits);

  const body = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    updatedAt: new Date(),
    published: false,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    birthDate: new Date(formData.get('birthDate') as string),
    country: formData.get('country') as string,
    city: formData.get('city') as string,
    address: formData.get('address') as string,
    availability: formData.get('availability') as string,
    experience: Number(formData.get('experience')),
    experienceTimeUnit: formData.get('experienceTimeUnit') as TimeUnits,

    childAgeGroup: childAgeGroup,

    numberOfChildren: Number(formData.get('numberOfChildren')),
    pets: (formData.get('pets') as string) === 'true',
    specialNeeds: (formData.get('specialNeeds') as string) === 'true',
    inOwnHouse: (formData.get('inOwnHouse') as string) === 'true',
    cleaning: (formData.get('cleaning') as string) === 'true',
    cleaningChildOnly: (formData.get('cleaningChildOnly') as string) === 'true',
    shopping: (formData.get('shopping') as string) === 'true',
    cooking: (formData.get('cooking') as string) === 'true',
    cookingChildOnly: (formData.get('cookingChildOnly') as string) === 'true',
    outWithChild: (formData.get('outWithChild') as string) === 'true',
    car: (formData.get('car') as string) === 'true',
    driversLicense: (formData.get('driversLicense') as string) === 'true',
    notSmoking: (formData.get('notSmoking') as string) === 'true',

    languages: languages,

    otherLanguages: formData.get('otherLanguages') as string,
    earnings: Number(formData.get('earnings')),
    earningsRate: formData.get('earningsRate') as EarningsRate,
    education: formData.get('education') as Education,
    sitterCourse: (formData.get('sitterCourse') as string) === 'true',
    firstAid: (formData.get('firstAid') as string) === 'true',
    authorId: Number(formData.get('authorId'))
  };

  const findPost = await prisma.post.findUnique({
    where: {
      authorId: Number(formData.get('authorId'))
    }
  });

  const isPost = findPost ? true : false;

  let post;

  if (isPost) {
    post = await prisma.post.update({
      where: {
        authorId: Number(formData.get('authorId'))
      },
      data: body
    });
  } else {
    post = await prisma.post.create({
      data: body
    });
  }

  if (!post) {
    return {
      status: 404,
      statusText: 'Something went wrong. Post is not created or updated.',
      success: false,
      post: null
    };
  } else {
    return {
      status: 200,
      statusText: 'Post successfully created or updated.',
      success: true,
      post
    };
  }
}
