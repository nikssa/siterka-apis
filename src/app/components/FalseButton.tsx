'use client';

import { toast } from 'react-toastify';

const FalseButton = () => {
  const onClick = () => {
    console.log('clicked');
    toast.info('Hello World!');
  };

  return <button onClick={onClick}>False Button</button>;
};

export default FalseButton;
