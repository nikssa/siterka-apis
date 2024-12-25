import { ProfileDataProps } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import './UserCardImage.scss';

const UserCardImage = ({
  userId,
  profile,
  isDesktop,
  size = 180
}: {
  userId: number;
  profile: ProfileDataProps;
  isDesktop: boolean;
  size?: number;
}) => {
  return (
    <div className='user-card--image'>
      <div
        className='image__blur sitter-photo__blur'
        style={{
          backgroundImage: !isDesktop ? `url(/${profile?.photo?.url})` : 'none'
        }}></div>

      <Link href={`/sitters/${userId}`}>
        <Image
          src={`/${profile?.photo?.url}`}
          alt={profile?.bio as string}
          width={size}
          height={size}
          // loading='lazy'
          // quality={40}
          // placeholder='blur'
          // blurDataURL={data.url}
        />
      </Link>
    </div>
  );
};

export default UserCardImage;
