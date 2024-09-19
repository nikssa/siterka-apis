import UserHeroCard from '../UserHeroCard/UserHeroCard';
import Link from 'next/link';

import './ParentsHero.scss';

type SitterProps = {
  name: string;
  age: number;
  url: string;
  desc: string;
};

const latestParents: SitterProps[] = [
  {
    name: 'John Doe',
    age: 25,
    url: 'https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: 'Parent 1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iusto harum quo.'
  },
  {
    name: 'Jane Doe',
    age: 30,
    url: 'https://images.pexels.com/photos/3204051/pexels-photo-3204051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: 'Parent 2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iusto harum quo.'
  },
  {
    name: 'John Doe',
    age: 25,
    url: 'https://images.pexels.com/photos/988622/pexels-photo-988622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: 'Parent 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iusto harum quo.'
  },
  {
    name: 'Jane Doe',
    age: 30,
    url: 'https://images.pexels.com/photos/3038455/pexels-photo-3038455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: 'Parent 4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iusto harum quo.'
  },
  {
    name: 'John Doe',
    age: 25,
    url: 'https://images.pexels.com/photos/1157398/pexels-photo-1157398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: 'Parent 5 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iusto harum quo.'
  },
  {
    name: 'Jane Doe',
    age: 30,
    url: 'https://images.pexels.com/photos/8838175/pexels-photo-8838175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: 'Parent 6 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iusto harum quo.'
  }
];

const ParentsHero = () => {
  return (
    <section className='hero parents-hero'>
      <div className='inner'>
        <h2>Latest Parents</h2>
        <div className='parents'>
          {latestParents.map((parent: SitterProps) => (
            <UserHeroCard data={parent} />
          ))}
        </div>
        <Link href='/parents'>See all parents</Link>
      </div>
    </section>
  );
};

export default ParentsHero;
