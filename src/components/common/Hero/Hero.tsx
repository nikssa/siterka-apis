import Button from '@/components/formElements/Button/Button';
import './Hero.scss';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='hero main-hero'>
      <div className='inner'>
        <div className='hero-image'></div>
        <h1>Punchline here</h1>
        <p>Lorem ipsum dolor sit amet</p>
        <Link href='#' className='call-to-action btn'>
          Call to action
        </Link>
      </div>
    </section>
  );
};

export default Hero;
