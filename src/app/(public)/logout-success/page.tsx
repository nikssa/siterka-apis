import { revalidatePath } from 'next/cache';

export const metadata = {
  title: 'Logout success page | SITERKA',
  description: 'You are now logged out.'
};

const LogoutSuccessPage = () => {
  return (
    <>
      <section>
        <div className='inner'>
          <h1>Logout Successful</h1>
          <p>You are now logged out.</p>
        </div>
      </section>
    </>
  );
};

export default LogoutSuccessPage;
