import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import H4Bottom from './H4Bottom';
import H4Top from './H4Top';

const H4Form = () => {
  return (
    <form>
      <Info />
      <H4Top />
      <H4Bottom />
      <ButtonBox />
    </form>
  );
};

export default H4Form;
