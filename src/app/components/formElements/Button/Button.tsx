import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // children: React.ReactNode;
  //   type?: 'button' | 'submit' | 'reset';
  label: string;
  primary?: boolean;
  // disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { label, primary, ...rest } = props;
  return <button {...rest}>{label}</button>;
};

export default Button;
