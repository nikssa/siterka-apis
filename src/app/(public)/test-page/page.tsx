import React from 'react';

const TestPage = () => {
  const className = 'some-class';
  const inputClassName = classNames(
    className,
    'k-input k-input-md k-rounded-md k-input-solid'
  );

  return <div className={inputClassName}>TestPage</div>;
};

const classNames = (...args: any[]): string => {
  const result: any = {};

  const addLeafKeys = (arg: any) =>
    typeof arg === 'object'
      ? Object.keys(arg).forEach((key) => {
          result[key] = arg[key];
        })
      : (result[arg] = true);

  const addKeys = (list: any) =>
    list
      .filter((arg: any) => arg !== true && !!arg)
      .map((arg: any) =>
        Array.isArray(arg) ? addKeys(arg) : addLeafKeys(arg)
      );

  addKeys(args);

  return Object.keys(result)
    .map((key) => (result[key] && key) || null)
    .filter((el) => el !== null)
    .join(' ');
};

export default TestPage;
