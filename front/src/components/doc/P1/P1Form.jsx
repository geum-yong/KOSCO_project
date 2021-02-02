import React from 'react';
import ButtonBox from '../common/ButtonBox';
import P1Bottom from './P1Bottom';
import P1Info from './P1Info';
import P1Top from './P1Top';

const P1Form = () => {
  return (
    <form>
      <P1Info />
      <P1Top />
      <P1Bottom />
      <ButtonBox />
    </form>
  );
};

export default P1Form;
