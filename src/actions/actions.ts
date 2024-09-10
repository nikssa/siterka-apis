'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function loginFormAction(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');
  console.log('loginFormAction email:', email, 'and password:', password);
  const users = await prisma.user.findMany();

  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  console.log('user', user);

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
