import type { Metadata } from 'next';
// import { Roboto } from 'next/font/google';
// import { Providers } from '../providers';
import './../globals.scss';
// const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Login Page',
  description: ''
};

export default function LoginLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* <body className={roboto.className}> */}
      <body>{children}</body>
    </html>
  );
}
