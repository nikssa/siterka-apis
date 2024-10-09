import Button from '@/components/formElements/Button/Button';
import Image from 'next/image';
import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';
import './IconButton.scss';
import { Icons } from '@/app/assets/icons';

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  label?: string;
  primary?: boolean;
  className?: string;
}

const IconButton = (props: IconButtonProps) => {
  const { icon, iconPosition, label, primary, className, ...rest } = props;
  const { pending } = useFormStatus();

  return (
    <button
      className={`${className || ''} ${primary ? 'primary' : ''} 
      ${icon ? 'icon' : ''} ${iconPosition || ''}`}
      {...rest}>
      {iconPosition === 'left' && icon}
      <span>{pending ? 'In progress...' : label}</span>
      {iconPosition === 'right' && icon}
    </button>
  );
};

export default IconButton;
