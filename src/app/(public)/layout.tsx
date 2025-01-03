import type { Metadata } from 'next';
import { Providers } from '@/providers/Providers';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../assets/globals.scss';
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
    <html lang='en'>
      <body>
        <Providers>
          <ToastContainer
            position='top-center'
            autoClose={false}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
            theme='light'
          />
          <div className='layout'>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
