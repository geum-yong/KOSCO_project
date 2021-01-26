import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import W1Bottom from './W1Bottom';
import W1Bottom2 from './W1Bottom2';
import W1Top from './W1Top';

const W1Form = () => {
  return (
    <form>
      <Info />
      <W1Top />
      <W1Bottom />
      <W1Bottom2 />
      <ButtonBox />
    </form>
  );
};

export default W1Form;
