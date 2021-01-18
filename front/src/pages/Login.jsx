import React from 'react';
import AppWrapper from '../components/common/AppWrapper';
import LoginForm from '../components/login/LoginForm';

const Login = ({ history }) => {
  return (
    <AppWrapper>
      <LoginForm history={history} />
    </AppWrapper>
  );
};

export default Login;
