import { useFormStatus } from 'react-dom';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  primary?: boolean;
}

const Button = (props: ButtonProps) => {
  const { label, primary, ...rest } = props;
  const { pending } = useFormStatus();

  return <button {...rest}>{pending ? 'In progress...' : label}</button>;
};

export default Button;
