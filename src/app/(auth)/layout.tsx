import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';

import ViewportInfo from '../components/ViewportInfo';

import './layout.scss';

export default function LoginLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='main-layout auth'>
      <body>
        <ToastContainer
          position='top-center'
          autoClose={false}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          theme='light'
        />
        <ViewportInfo />
        {children}
      </body>
    </html>
  );
}
