import useIsAuthenticatedClient from '@/hooks/useIsAuthenticatedClient';

const AvatarImage = () => {
  const { user } = useIsAuthenticatedClient();
  const initials = user?.name.slice(0, 2).toUpperCase();
  return <>{initials}</>;
};

export default AvatarImage;
