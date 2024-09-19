import Link from 'next/link';
import Image from 'next/image';
// import SitterBabyInTheLap from '/public/hero.webp';
import SitterBabyInTheLap from '/src/app/assets/hero.webp';
import CallToAction from './CallToAction';

import './Hero.scss';

const Hero = () => {
  return (
    <section className='hero main-hero'>
      <div className='inner'>
        <div className='hero-image'>
          <Image
            src={SitterBabyInTheLap}
            alt='Sitter Baby in Lap'
            placeholder='blur'
            quality={50}
            priority={true}
            loading='eager'
            layout='fill'
          />
        </div>
        <div className='hero-text'>
          <h1>Do you ever care enough?</h1>
          <p>No matter what your needs are sitterka can help.</p>
        </div>
        <CallToAction />
      </div>
    </section>
  );
};

export default Hero;
