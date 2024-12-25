'use client';

import { useRouter } from 'next/navigation';
import './SimpleButton.scss';

interface SimpleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  primary?: boolean;
  className?: string;
  redirectLink?: string;
}

const SimpleButton = (props: SimpleButtonProps) => {
  const { label, primary, className, redirectLink, ...rest } = props;

  const router = useRouter();

  const onClick = () => {
    router.push(redirectLink || '/login');
  };

  return (
    <button
      className={`${className || ''} ${primary ? 'primary' : ''}`}
      onClick={onClick}
      {...rest}>
      {label}
    </button>
  );
};

export default SimpleButton;
