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
            Data submitted successfully. Please check your inbox for
            confirmation email and follow instructions.
          </p>
        </div>
      </section>
    </>
  );
};

export default RegistrationSuccessPage;
