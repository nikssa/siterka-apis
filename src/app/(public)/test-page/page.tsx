import React from 'react';

const TestPage = () => {
  const module = {
    x: 42,
    getX: function () {
      return this.x;
    }
  };

  const unboundGetX = module.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // Expected output: undefined

  const boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());
  // Expected output: 42

  return <h1>{boundGetX()}</h1>;
};

export default TestPage;
