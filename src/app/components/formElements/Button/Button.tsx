import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // children: React.ReactNode;
  //   type?: 'button' | 'submit' | 'reset';
  label: string;
  primary?: boolean;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { label, primary, disabled, ...rest } = props;
  return (
    <button className='primary' {...rest}>
      {label}
    </button>
  );
};

export default Button;
