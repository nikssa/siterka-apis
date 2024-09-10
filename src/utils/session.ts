'use server';

import { SignJWT, jwtVerify } from 'jose';
// import { cookies } from 'next/headers';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const key = new TextEncoder().encode(process.env.JWT_SECRET);

const alg = 'HS256';

type SameSiteProps = boolean | 'lax' | 'none' | 'strict' | undefined;

enum sameSiteEnum {
  Boolean = 'boolean',
  None = 'none',
  Lax = 'lax',
  Strict = 'strict',
  Undefined = 'undefined'
}

type SessionProps = {
  data: {
    id: string;
    username: string;
    email: string;
    role: string;
  };
};

const cookie = {
  name: 'session',
  options: {
    httpOnly: true,
    secure: true,
    sameSite: 'lax' as SameSiteProps,
    path: '/'
  },
  duration: 24 * 60 * 60 * 1000
};

export async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: alg })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(key);
}

export async function decrypt(session) {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: [alg]
    });
    return payload;
  } catch (error) {
    return null;
  }
}

// export async function createSessionToken(data: any) {
//   const expires = new Date(Date.now() + cookie.duration);
//   const token = await new SignJWT(data)
//     .setProtectedHeader({ alg })
//     .setExpirationTime('2h')
//     .sign(key);
//   cookies().set(cookie.name, token, { ...cookie.options, expires });
//   return token;
// }

export async function createSession(data: {
  id: string;
  username: string;
  email: string;
  role: string;
}) {
  const expires = new Date(Date.now() + cookie.duration);
  const session = await encrypt({ data, expires });

  cookies().set(cookie.name, session, { ...cookie.options, expires });
  //   redirect('/');
}

// export async function verifySessionToken(token: string) {
//   const { payload } = await jwtVerify(token, key);
//   return payload;
// }

export async function verifySession() {
  const _cookie = cookies().get(cookie.name)?.value;
  const session = await decrypt(_cookie);

  console.log('session', session);

  //   if (!session?.userId) {
  //     redirect('/login');
  //   }

  return session as SessionProps;
}

// export async function deleteSessionToken(token: string) {
//   const { payload } = await jwtVerify(token, key);
//   return payload;
// }

export async function deleteSession() {
  cookies().delete(cookie.name);
  //   redirect('/login');
}
