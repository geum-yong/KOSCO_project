import React, { useEffect } from 'react';
import AppWrapper from '../components/common/AppWrapper';
import Header from '../components/common/Header';
import CategoryList from '../components/home/CategoryList';

const Home = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <Header />
      <CategoryList />
    </AppWrapper>
  );
};

export default Home;
