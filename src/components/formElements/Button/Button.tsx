import { useFormStatus } from 'react-dom';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  primary?: boolean;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { label, primary, className, ...rest } = props;
  const { pending } = useFormStatus();

  return (
    <button
      className={`${className || ''} ${primary ? 'primary' : ''}`}
      {...rest}>
      {pending ? 'In progress...' : label}
    </button>
  );
};

export default Button;
