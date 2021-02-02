import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import OX2Bottom from './OX2Bottom';
import OX2Bottom2 from './OX2Bottom2';
import OX2Top from './OX2Top';

const OX2Form = () => {
  return (
    <form>
      <Info />
      <OX2Top />
      <OX2Bottom />
      <OX2Bottom2 />
      <ButtonBox />
    </form>
  );
};

export default OX2Form;
