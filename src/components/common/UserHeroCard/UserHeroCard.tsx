import Image from 'next/image';
import React from 'react';
import { SitterProps } from '../SittersHero/SittersHero';

import './UserHeroCard.scss';

const UserHeroCard = ({ data }: { data: SitterProps }) => {
  return (
    <div className='user' key={data.url}>
      <Image
        src={data.url}
        alt={data.desc}
        width={300}
        height={400}
        loading='lazy'
        quality={30}
        // fill
        // sizes='(min-width: 200px) 300px, 400px'
        // placeholder='blur'
      />
      <div className='background'>
        <div className='text'>
          <div className='text'></div>
          <h3>{data.name}</h3>
          <p>{data.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default UserHeroCard;
