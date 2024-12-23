import { PostDataProps, UserDataProps } from '@/types/types';
import Image from 'next/image';
import { calculateAge } from '@/utils/calculateAge';
import './UserCard.scss';
import { User } from '@prisma/client';
import Link from 'next/link';
import { Icons } from '@/app/assets/icons';
import Offerings from '../Offerings/Offerings';
import useTextTruncate from '@/hooks/useTextTruncate';

const UserCard = ({ data }: { data: UserDataProps }) => {
  // console.log('data', data);
  const age = calculateAge(data?.post?.birthDate as Date);

  // check if window viewport is greater than 768px
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;

  const lastName = isDesktop
    ? data?.profile?.lastName
    : data?.profile?.lastName.slice(0, 1);

  return (
    <>
      <div className='user-card'>
        {data?.profile?.photo?.url ? (
          <div className='user-card--image'>
            <div
              className='image__blur sitter-photo__blur'
              style={{
                backgroundImage: !isDesktop
                  ? `url(/${data?.profile?.photo?.url})`
                  : 'none'
              }}></div>
            <Link
              href={`/sitters/${data?.id}`}
              // className='user-card--image-link'
            >
              <Image
                src={`/${data?.profile?.photo?.url}`}
                alt={data?.profile?.bio as string}
                width={180}
                height={180}
                // loading='lazy'
                // quality={40}
                // placeholder='blur'
                // blurDataURL={data.url}
              />
            </Link>
          </div>
        ) : (
          <></>
        )}
        <div className='user-card--text'>
          <h1>
            <Link href={`/sitters/${data?.id}`}>
              {data?.profile?.firstName} {lastName}
            </Link>

            <span>
              {data?.post?.earnings}{' '}
              <sup className='currency'>{data?.post?.currency}</sup>
              <span className='slash'>/</span>
              <span className='earnings-rate'>{data?.post?.earningsRate}</span>
            </span>
          </h1>

          {!data?.post?.city || (
            <div>
              Babysitter in {data?.post?.city}, {data?.post?.country}
              {!data?.post?.address
                ? ' - No address specified'
                : ` - ${data?.post?.address}`}
              <div>
                {age} years | {data?.post?.experience}{' '}
                {data?.post?.experienceTimeUnit} paid experience
              </div>
            </div>
          )}
          <div></div>

          {/* <p>{data?.profile?.bio}</p> */}

          <p className='description'>
            {useTextTruncate(data?.post?.description as string, 160)}
          </p>

          {/* Offering */}
          <Offerings data={data} />
        </div>
      </div>
    </>
  );
};

export default UserCard;
