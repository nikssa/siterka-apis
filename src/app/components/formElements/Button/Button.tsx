import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // children: React.ReactNode;
  //   type?: 'button' | 'submit' | 'reset';
  primary?: boolean;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { primary, disabled, ...rest } = props;
  return (
    <button className='primary' {...rest}>
      Register
    </button>
  );
};

export default Button;
