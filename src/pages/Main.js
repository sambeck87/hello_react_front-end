import React from 'react';
import { useSelector } from 'react-redux';

const Main = () => {
  const message = useSelector((state) => state.greetingReducer);

  return (
    <>
      <div>{message}</div>
    </>
  );
};

export default Main;
