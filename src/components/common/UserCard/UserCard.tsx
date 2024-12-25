import useTextTruncate from '@/hooks/useTextTruncate';
import { EarningsRate, ProfileDataProps, UserDataProps } from '@/types/types';
import { calculateAge } from '@/utils/calculateAge';
import Link from 'next/link';
import Offerings from '../Offerings/Offerings';
import UserCardImage from '../UserCardImage/UserCardImage';
import './UserCard.scss';

const UserCard = ({ data }: { data: UserDataProps }) => {
  const earningsRate = {
    [EarningsRate.HOURLY]: 'hr',
    [EarningsRate.DAILY]: 'day',
    [EarningsRate.WEEKLY]: 'week',
    [EarningsRate.MONTHLY]: 'month'
  }[data?.post?.earningsRate as EarningsRate];

  // console.log('data', data);
  const age = calculateAge(data?.post?.birthDate as Date);

  // check if window viewport is greater than 768px
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;

  return (
    <>
      <div className='user-card'>
        {data?.profile?.photo?.url ? (
          <>
            <UserCardImage
              userId={data?.id as number}
              profile={data?.profile as ProfileDataProps}
              isDesktop={isDesktop}
              size={185}
            />
          </>
        ) : (
          <></>
        )}
        <div className='user-card--text'>
          <h1>
            <Link href={`/sitters/${data?.id}`}>
              {data?.profile?.firstName} {data?.profile?.lastName.slice(0, 1)}
            </Link>

            <span>
              {data?.post?.earnings}{' '}
              <sup className='currency'>{data?.post?.currency}</sup>
              <span className='slash'>/</span>
              <span className='earnings-rate'>{earningsRate}</span>
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

          <p className='description'>
            {useTextTruncate(data?.post?.description as string, 160)}
          </p>

          <Offerings data={data} />
        </div>
      </div>
    </>
  );
};

export default UserCard;
