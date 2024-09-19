import Image from 'next/image';

import './SittersHero.scss';
import UserHeroCard from '../UserHeroCard/UserHeroCard';
import Link from 'next/link';

export type SitterProps = {
  name: string;
  age: number;
  url: string;
  desc: string;
};

const latestSitters: SitterProps[] = [
  {
    name: 'John Doe',
    age: 25,
    url: 'https://images.pexels.com/photos/755049/pexels-photo-755049.jpeg',
    desc: 'Sitter 1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iusto harum quo.'
  },
  {
    name: 'Jane Doe',
    age: 30,
    url: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    desc: 'Sitter 2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iusto harum quo.'
  },
  {
    name: 'John Doe',
    age: 25,
    url: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg',
    desc: 'Sitter 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iusto harum quo.'
  },
  {
    name: 'Jane Doe',
    age: 30,
    url: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
    desc: 'Sitter 4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iusto harum quo.'
  },
  {
    name: 'John Doe',
    age: 25,
    url: 'https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg',
    desc: 'Sitter 5 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iusto harum quo.'
  },
  {
    name: 'Jane Doe',
    age: 30,
    url: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg',
    desc: 'Sitter 6 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iusto harum quo.'
  }
];

const SittersHero = () => {
  return (
    <section className='hero sitters-hero'>
      <div className='inner'>
        <h2>Latest Sitters</h2>
        <div className='sitters'>
          {latestSitters.map((sitter: SitterProps) => (
            <UserHeroCard data={sitter} />
          ))}
        </div>
        <Link href='/parents'>See all sitters</Link>
      </div>
    </section>
  );
};

export default SittersHero;
