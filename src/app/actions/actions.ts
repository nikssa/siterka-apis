'use server';

import { PostDataProps } from '@/types/types';
import {
  EarningsRate,
  Education,
  PrismaClient,
  TimeUnits,
  Post,
  Currency
} from '@prisma/client';
import md5 from 'md5';

import photo from '../../../public/uploads/1728953084901_me.jpeg';

// import sharp from 'sharp';
const sharp = require('sharp');

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
  const languages = {
    serbian: (formData.get('serbian') as string) === 'on',
    english: (formData.get('english') as string) === 'on',
    spanish: (formData.get('spanish') as string) === 'on',
    german: (formData.get('german') as string) === 'on',
    french: (formData.get('french') as string) === 'on',
    italian: (formData.get('italian') as string) === 'on'
  };

  const childAgeGroup = {
    newborns: (formData.get('newborns') as string) === 'on',
    infants: (formData.get('infants') as string) === 'on',
    toddlers: (formData.get('toddlers') as string) === 'on',
    preschoolers: (formData.get('preschoolers') as string) === 'on',
    schoolers: (formData.get('schoolers') as string) === 'on',
    teens: (formData.get('teens') as string) === 'on'
  };

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
    pets: (formData.get('pets') as string) === 'on',
    specialNeeds: (formData.get('specialNeeds') as string) === 'on',
    inOwnHouse: (formData.get('inOwnHouse') as string) === 'on',
    cleaning: (formData.get('cleaning') as string) === 'on',
    cleaningChildOnly: (formData.get('cleaningChildOnly') as string) === 'on',
    shopping: (formData.get('shopping') as string) === 'on',
    cooking: (formData.get('cooking') as string) === 'on',
    cookingChildOnly: (formData.get('cookingChildOnly') as string) === 'on',
    outWithChild: (formData.get('outWithChild') as string) === 'on',
    car: (formData.get('car') as string) === 'on',
    driversLicense: (formData.get('driversLicense') as string) === 'on',
    notSmoking: (formData.get('notSmoking') as string) === 'on',
    languages: languages,
    otherLanguages: formData.get('otherLanguages') as string,
    earnings: Number(formData.get('earnings')),
    earningsRate: formData.get('earningsRate') as EarningsRate,
    currency: formData.get('currency') as Currency,
    education: formData.get('education') as Education,
    sitterCourse: (formData.get('sitterCourse') as string) === 'on',
    firstAid: (formData.get('firstAid') as string) === 'on',
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

export async function uploadFormAction(formData: FormData) {
  // const file = formData.get('file') as File;

  const result = await fetch('http://localhost:4000/api/upload', {
    method: 'POST',
    body: formData
  });
  console.log('result from action', result);
  // return result;
}

export async function resizeImageAction() {
  console.log('resizeImageAction', photo);

  sharp('../../../public/uploads/1728953084901_me.jpeg')
    .resize(200, 200)
    .toFile(`../../../public/uploads/1728953084901_me_output.jpg`);
}
