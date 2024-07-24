import type { Metadata } from 'next';
// import { Roboto } from 'next/font/google';
import { Providers } from '../providers';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
// const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] });

import './layout.scss';

export const metadata: Metadata = {
  title: 'Siterka APIs',
  description: 'All APIs the Siterka app needs'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='main-layout'>
      {/* <body className={roboto.className}> */}
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
