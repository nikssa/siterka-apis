import type { Metadata } from 'next';
// import { Roboto } from 'next/font/google';
import { Providers } from '../providers';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

import '/src/app/globals.scss';

// const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] });

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
    <html lang='en'>
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
