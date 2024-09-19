const SittersPage = async function () {
  const usersData = await fetch('http://localhost:4000/api/sitters', {
    method: 'GET'
  });
  const users = await usersData.json();

  const postsData = [
    {
      id: 1,
      fullName: 'Sitter Nanny',
      title: 'Sitter Nanny',
      description: 'Sitter Nanny Description',
      email: 'pGK3B@example.com',
      phone: '555-555-5555',
      birthDate: '1990-01-01',
      bio: 'Sitter Nanny Bio',

      country: 'USA',
      city: 'New York',
      address: '123 Main St',

      languages: ['English', 'Spanish'],
      earnings: 500,
      earningsRate: 'Hourly',
      experience: 5,
      availability: 'Monday - Friday',
      photo: 'https://picsum.photos/200',
      education: 'High School',
      sitterCourse: true,
      firstAid: true
    }
  ];

  return (
    <>
      <section>
        <div className='inner'>
          <h1>Looking for a sitter</h1>
          <div className='user-horizontal-card'></div>
        </div>
      </section>
    </>
  );
};

export default SittersPage;
