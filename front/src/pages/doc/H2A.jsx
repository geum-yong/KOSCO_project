import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import Header from '../../components/common/Header';
import H2AForm from '../../components/doc/H2-A/H2AForm';

const H2A = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <Header />
      <H2AForm />
    </AppWrapper>
  );
};

export default H2A;
