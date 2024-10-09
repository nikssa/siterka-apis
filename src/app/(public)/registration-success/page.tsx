export const metadata = {
  title: 'Registration success page | SITERKA',
  description:
    'You are successfully registered. Please check your email for confirmation.'
};

const RegistrationSuccessPage = () => {
  return (
    <>
      <section>
        <div className='inner'>
          <h1>Registration Successful</h1>
          <p>
            You are now registered. Please check your email for confirmation.
          </p>
        </div>
      </section>
    </>
  );
};

export default RegistrationSuccessPage;
