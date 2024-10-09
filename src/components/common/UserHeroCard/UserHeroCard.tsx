import Image from 'next/image';
import React from 'react';
import { SitterProps } from '../SittersHero/SittersHero';
import Link from 'next/link';
import './UserHeroCard.scss';

const UserHeroCard = ({ data }: { data: SitterProps }) => {
  return (
    <div className='user'>
      <Link href={`/sitters/${data.id}`}>
        <Image
          src={data.url}
          alt={data.desc}
          width={300}
          height={400}
          loading='lazy'
          quality={40}
          placeholder='blur'
          blurDataURL={data.url}
        />
        <div className='background'>
          <div className='text'>
            <div className='text'></div>
            <h3>{data.name}</h3>
            <p>{data.desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserHeroCard;
