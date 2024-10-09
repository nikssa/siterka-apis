import { PostDataProps } from '@/types/types';
import Image from 'next/image';
import { calculateAge } from '@/utils/calculateAge';
import './UserCard.scss';

const UserCard = ({ data }: { data: PostDataProps }) => {
  const age = calculateAge(data?.birthDate as Date);

  return (
    <>
      <div className='user-card'>
        <section className='card-header'>
          {data?.profile?.photo?.url ? (
            <div className='card-header-image'>
              <div
                className='image__blur sitter-photo__blur'
                style={{
                  background: `url(${data?.profile?.photo?.url})`
                }}></div>
              <Image
                src={data?.profile?.photo?.url}
                alt={data.title}
                // alt={data.desc}
                width={250}
                height={250}
                // loading='lazy'
                // quality={40}
                // placeholder='blur'
                // blurDataURL={data.url}
              />
            </div>
          ) : (
            <></>
          )}
          <div className='card-header-text'>
            <h2>
              {data?.profile?.firstName} {data?.profile?.lastName}
            </h2>
            <p>Age: {age}</p>
            <p>{data?.profile?.bio}</p>
          </div>
        </section>
        <section className='card-body'>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>
            Location: {data.country}, {data.city}, {data.address}
          </p>
        </section>
      </div>
    </>
  );
};

export default UserCard;
