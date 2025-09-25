import React, { use, type JSX } from 'react';
import { UserContext } from '../context/UserContext';
import { Navigate } from 'react-router';

interface Props {
  // element: JSX.Element;
  element: React.ReactNode;
}

export const PrivateRoute = ({ element }: Props) => {
  const { authStatus } = use(UserContext);

  if (authStatus === 'checking') {
    return <div>Loading...</div>;
  }

  if (authStatus === 'authenticathed') {
    return element;
  }

  return (
    <Navigate
      to="/login"
      replace
    />
  );
};
