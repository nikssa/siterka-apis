// 'use server';

import { PrismaClient } from '@prisma/client';
import { toast } from 'react-toastify';

const prisma = new PrismaClient();

export async function LoginFormSubmit(prevState: FormData, formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');
  // console.log('loginFormAction', email, password);
  const res = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });

  if (res.status !== 200) {
    const error = await res.json();
    console.log('error', error);
    return error;
  } else {
    const user = await res.json();
    console.log('user', user);
    return user;
  }
}
