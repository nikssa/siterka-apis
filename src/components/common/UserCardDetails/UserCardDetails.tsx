import { UserDataProps } from '@/types/types';
import { calculateAge } from '@/utils/calculateAge';
import Image from 'next/image';
import Offerings from '../Offerings/Offerings';
import SimpleButton from '../SimpleButton/SimpleButton';
import './UserCardDetails.scss';

const UserCardDetails = ({ data }: { data: UserDataProps }) => {
  const age = calculateAge(data?.post?.birthDate as Date);

  if (!data) {
    return <h1>Sorry, user not found</h1>;
  }

  return (
    <div className='user-details'>
      <div className='user-details--image-column'>
        {data?.profile?.photo?.url ? (
          <div className='image'>
            <div
              className='image__blur sitter-photo__blur'
              style={{
                background: `url(${data?.profile?.photo?.url})`
              }}></div>
            <Image
              src={`/${data?.profile?.photo?.url}`}
              alt={data?.post?.title as string}
              // alt={data?.desc}
              width={250}
              height={250}
              // loading='lazy'
              // quality={40}
              // placeholder='blur'
              // blurDataURL={data?.url}
            />
          </div>
        ) : (
          <></>
        )}
        <SimpleButton primary label='Send message' />
      </div>

      <div className='user-details--data-column'>
        <div className='header'>
          <h1>
            {data?.profile?.firstName} {data?.profile?.lastName}
            <span className='user-type'>
              {data?.post?.earnings} {data?.post?.currency} /{' '}
              {data?.post?.earningsRate}
            </span>
          </h1>
          {!data?.post?.city || (
            <span>
              Babysitter ({age}) in {data?.post?.city}, {data?.post?.country}
              {!data?.post?.address ? '' : ` - ${data?.post?.address}`}
            </span>
          )}
          {!data?.profile?.bio || <p>{data?.profile?.bio}</p>}
        </div>

        <div className='body'>
          <h2>{data?.post?.title}</h2>
          <p className='description'>{data?.post?.description}</p>

          <hr />

          {!data?.post?.availability || (
            <>
              <h3>Availability </h3>
              <p>{data?.post?.availability}</p>
              <hr />
            </>
          )}

          <h3>{data?.role === 'sitter' ? 'Offerings' : 'Requirements'}</h3>

          <Offerings data={data} />

          <p>
            Hello! My name is {data?.profile?.firstName}. I will babysit your
            child/children for {data?.post?.earnings} {data?.post?.currency}
            per {data?.post?.earningsRate}. I am {age} years old. I live in{' '}
            {data?.post?.city}, {data?.post?.country} nearby{' '}
            {data?.post?.address}.
            {data?.post?.address && ` I work in ${data?.post?.address}.`}
          </p>

          {!data?.post?.education || (
            <p>I have a {data?.post?.education} education</p>
          )}

          {!data?.post?.experience || (
            <p>
              I have {data?.post?.experience} {data?.post?.experienceTimeUnit}{' '}
              of experience
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCardDetails;
