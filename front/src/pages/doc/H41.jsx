import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import Header from '../../components/common/Header';
import H41Form from '../../components/doc/H4-1/H41Form';

const H41 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <Header />
      <H41Form />
    </AppWrapper>
  );
};

export default H41;
