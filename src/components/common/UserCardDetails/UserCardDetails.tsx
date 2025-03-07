import { EarningsRate, ProfileDataProps, UserDataProps } from '@/types/types';
import { calculateAge } from '@/utils/calculateAge';
import Offerings from '../Offerings/Offerings';
import SimpleButton from '../SimpleButton/SimpleButton';
import UserCardImage from '../UserCardImage/UserCardImage';
import './UserCardDetails.scss';

const UserCardDetails = ({
  data,
  role
}: {
  data: UserDataProps;
  role: string;
}) => {
  // check if window viewport is greater than 768px
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;

  const age = calculateAge(data?.post?.birthDate as Date);

  const earningsRate = {
    [EarningsRate.HOURLY]: 'hour',
    [EarningsRate.DAILY]: 'day',
    [EarningsRate.WEEKLY]: 'week',
    [EarningsRate.MONTHLY]: 'month'
  }[data?.post?.earningsRate as EarningsRate];

  const numberOfChildren = data?.post?.numberOfChildren || 1;
  const child = numberOfChildren > 1 ? 'children' : 'child';

  if (!data) {
    return <h1>Sorry, user not found</h1>;
  }

  console.log('role', role);

  return (
    <div className='user-details'>
      <div className='user-details--image-column'>
        {data?.profile?.photo?.url ? (
          <>
            <UserCardImage
              userId={data?.id as number}
              profile={data?.profile as ProfileDataProps}
              isDesktop={isDesktop}
              size={250}
            />
          </>
        ) : (
          <></>
        )}

        <SimpleButton primary label='Send message' redirectLink='/login' />
      </div>

      <div className='user-details--data-column'>
        <div className='header'>
          <h1>
            {role === 'admin'
              ? 'Admin - '
              : role === 'sitter'
              ? 'Babysitter - '
              : 'Parent - '}
            {data?.profile?.firstName} {data?.profile?.lastName.slice(0, 1)}
            {role === 'sitter' && (
              <span>
                {data?.post?.earnings}{' '}
                <sup className='currency'>{data?.post?.currency}</sup>
                <span className='slash'>/</span>
                <span className='earnings-rate'>{earningsRate}</span>
              </span>
            )}
          </h1>

          {!data?.post?.city || (
            <>
              <div>
                {data?.post?.city}, {data?.post?.country}
                {!data?.post?.address
                  ? ' - No address specified'
                  : ` - ${data?.post?.address}`}
              </div>
              {role === 'sitter' && (
                <div>
                  {age} years | {data?.post?.experience}{' '}
                  {data?.post?.experienceTimeUnit} paid experience
                </div>
              )}
            </>
          )}
        </div>

        <div className='body'>
          <p className='description'>{data?.post?.description}</p>

          <p className='highlighted'>
            Hello! My name is {data?.profile?.firstName}. I will babysit your{' '}
            {child}{' '}
            {data?.post?.earnings && (
              <>
                for {data?.post?.earnings} {data?.post?.currency} per{' '}
                {earningsRate}
              </>
            )}
            . I am {age} years old. I live in {data?.post?.city},{' '}
            {data?.post?.country}
            {data?.post?.address && ` ${data?.post?.address} nearby`}.{' '}
            {!data?.post?.education || (
              <>I have a {data?.post?.education} education</>
            )}{' '}
            {!data?.post?.experience || (
              <>
                and {data?.post?.experience} {data?.post?.experienceTimeUnit} of
                paid experience
              </>
            )}
            .
          </p>

          <h3>Contact Details</h3>
          <p className='contact-details'>
            Email:{' '}
            {data?.post?.email ? (
              <a href={`mailto:${data?.post?.email}`}>{data?.post?.email}</a>
            ) : data.email ? (
              <a href={`mailto:${data.email}`}>{data.email}</a>
            ) : null}
            <br />
            Phone: <a href={`tel:${data?.post?.phone}`}>{data?.post?.phone}</a>
          </p>

          <hr />

          {!data?.post?.availability || (
            <>
              <h3>Availability </h3>
              <p>{data?.post?.availability}</p>
              <hr />
            </>
          )}

          <h3>{role === 'sitter' ? 'Offerings' : 'Requirements'}</h3>
          <Offerings data={data} />
        </div>
      </div>
    </div>
  );
};

export default UserCardDetails;
