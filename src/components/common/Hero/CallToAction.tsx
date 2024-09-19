'use client';

import Button from '@/components/formElements/Button/Button';

import './CallToAction.scss';

const CallToAction = () => {
  return (
    <div className='call-to-action'>
      <Button className='animation' label='Find a sitter' primary={true} />
      <Button label='Become a sitter' />
    </div>
  );
};

export default CallToAction;
