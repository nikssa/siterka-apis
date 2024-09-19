import Link from 'next/link';
import Image from 'next/image';
import SitterBabyInTheLaps from '../../../../public/pexels-vika-glitter-392079-1648363.webp';
import CallToAction from './CallToAction';

import './Hero.scss';

const Hero = () => {
  return (
    <section className='hero main-hero'>
      <div className='inner'>
        <div className='hero-image'>
          <Image
            src={SitterBabyInTheLaps}
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
