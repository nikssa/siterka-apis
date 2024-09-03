'use client';

import React, { useEffect } from 'react';

const ViewportInfo = () => {
  const [vh, setVh] = React.useState(0);
  const [vw, setVw] = React.useState(0);
  useEffect(() => {
    setVw(window.innerWidth);
    setVh(window.innerHeight);
  }, []);

  const style: React.CSSProperties = {
    backgroundColor: 'rgba(255, 0, 0, 0.9)',
    padding: '10px',
    position: 'fixed',
    bottom: '0',
    zIndex: '10'
  };

  return (
    <div className='viewport' style={style}>
      vw: {vw}, vh: {vh}
    </div>
  );
};

export default ViewportInfo;
