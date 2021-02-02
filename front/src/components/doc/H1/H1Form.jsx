import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import H1Bottom from './H1Bottom';
import H1Bottom2 from './H1Bottom2';
import H1Top from './H1Top';

const H1Form = () => {
  return (
    <form>
      <Info />
      <H1Top />
      <H1Bottom />
      <H1Bottom2 />
      <ButtonBox />
    </form>
  );
};

export default H1Form;
