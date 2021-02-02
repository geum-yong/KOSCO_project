import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import H41Bottom from './H41Bottom';
import H41Top from './H41Top';

const H41Form = () => {
  return (
    <form>
      <Info />
      <H41Top />
      <H41Bottom />
      <ButtonBox />
    </form>
  );
};

export default H41Form;
