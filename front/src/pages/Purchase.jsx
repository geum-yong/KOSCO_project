import React, { useEffect } from 'react';

const Purchase = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <>
      <h1>구매 관리</h1>
      <p>구매 내역 화면입니다.</p>
    </>
  );
};

export default Purchase;
