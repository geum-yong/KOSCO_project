import React, { useEffect } from 'react';
import AppWrapper from '../components/common/AppWrapper';
import Header from '../components/common/Header';
import InspectionBox from '../components/inspection/InspectionBox';

const Inspection = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <Header />
      <InspectionBox />
    </AppWrapper>
  );
};

export default Inspection;
