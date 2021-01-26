import React from 'react';
import ButtonBox from '../common/ButtonBox';
import A2Bottom from './A2Bottom';
import Info from '../common/Info';
import A2Top from './A2Top';

const A2Form = () => {
  return (
    <form>
      <Info />
      <A2Top />
      <A2Bottom />
      <ButtonBox />
    </form>
  );
};

export default A2Form;
