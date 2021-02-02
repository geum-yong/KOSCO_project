import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import I1Bottom from './I1Bottom';
import I1Top from './I1Top';

const I1Form = () => {
  return (
    <form>
      <Info />
      <I1Top />
      <I1Bottom />
      <ButtonBox />
    </form>
  );
};

export default I1Form;
