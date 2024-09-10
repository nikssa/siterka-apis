'use server';

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

type SameSiteProps = boolean | 'lax' | 'none' | 'strict' | undefined;

type SessionProps = {
  data: {
    id: string;
    username: string;
    email: string;
    role: string;
  };
};

const key = new TextEncoder().encode(process.env.JWT_SECRET);
const alg = 'HS256';

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

export async function encrypt(payload: SessionProps & { expires: Date }) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: alg })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(key);
}

export async function decrypt(session: string) {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: [alg]
    });
    return payload;
  } catch (error) {
    return null;
  }
}

export async function createSession(data: {
  id: string;
  username: string;
  email: string;
  role: string;
}) {
  const expires = new Date(Date.now() + cookie.duration);
  const session = await encrypt({ data, expires });
  cookies().set(cookie.name, session, { ...cookie.options, expires });
}

export async function verifySession() {
  const _cookie = cookies().get(cookie.name)?.value;
  const session = await decrypt(_cookie as string);
  return session as SessionProps;
}

export async function deleteSession() {
  cookies().delete(cookie.name);
}
