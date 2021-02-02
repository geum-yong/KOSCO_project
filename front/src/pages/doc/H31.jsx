import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import Header from '../../components/common/Header';
import H31Form from '../../components/doc/H3-1/H31Form';

const H31 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <Header />
      <H31Form />
    </AppWrapper>
  );
};

export default H31;
