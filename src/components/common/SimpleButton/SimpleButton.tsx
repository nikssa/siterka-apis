import './SimpleButton.scss';

interface SimpleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  primary?: boolean;
  className?: string;
}

const SimpleButton = (props: SimpleButtonProps) => {
  const { label, primary, className, ...rest } = props;

  return (
    <button
      className={`${className || ''} ${primary ? 'primary' : ''}`}
      {...rest}>
      {label}
    </button>
  );
};

export default SimpleButton;
