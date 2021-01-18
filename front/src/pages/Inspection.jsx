import React, { useEffect } from 'react';

const Inspection = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <>
      <h1>검사 계획</h1>
      <p>검사 계획 화면입니다.</p>
    </>
  );
};

export default Inspection;
