import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import H2Bottom from './H2Bottom';
import H2Top from './H2Top';

const H2Form = () => {
  return (
    <form>
      <Info />
      <H2Top />
      <H2Bottom />
      <ButtonBox />
    </form>
  );
};

export default H2Form;
