import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import H31Bottom from './H31Bottom';
import H31Bottom2 from './H31Bottom2';
import H31Top from './H31Top';

const H31Form = () => {
  return (
    <form>
      <Info />
      <H31Top />
      <H31Bottom />
      <H31Bottom2 />
      <ButtonBox />
    </form>
  );
};

export default H31Form;
