import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import Header from '../../components/common/Header';
import I1Form from '../../components/doc/I-1/I1Form';

const I1 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <Header />
      <I1Form />
    </AppWrapper>
  );
};

export default I1;
