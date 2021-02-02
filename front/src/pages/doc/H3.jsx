import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import Header from '../../components/common/Header';
import H3Form from '../../components/doc/H3/H3Form';

const H3 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <Header />
      <H3Form />
    </AppWrapper>
  );
};

export default H3;
