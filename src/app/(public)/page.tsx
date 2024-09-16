import Hero from '@/components/common/Hero/Hero';
import ParentsHero from '@/components/common/ParentsHero/ParentsHero';
import SittersHero from '@/components/common/SittersHero/SittersHero';

export const metadata = {
  title: 'Home page | SITERKA',
  description: 'This is a home page. Learn more about SITERKA.'
};

const HomePage = async () => {
  return (
    <>
      <Hero />

      <SittersHero />

      <ParentsHero />
    </>
  );
};

export default HomePage;
