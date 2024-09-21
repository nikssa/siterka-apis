import Link from 'next/link';

const Icon = ({
  className,
  size = '20px',
  color = 'var(--primary-color)',
  link,
  onClick,
  children
}: {
  className?: string;
  size?: string;
  color?: string;
  link?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}) => {
  const styles = {
    fill: color,
    width: size,
    height: size
  };

  return link || typeof onClick === 'function' ? (
    <Link
      className={className}
      href={link || ''}
      onClick={onClick}
      style={styles}>
      {children}
    </Link>
  ) : (
    <div className={className} style={styles}>
      {children}
    </div>
  );
};

export default Icon;
