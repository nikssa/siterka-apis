import { Providers } from '@/providers/Providers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../assets/globals.scss';
import './layout.scss';

export default function LoginLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='auth'>
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
