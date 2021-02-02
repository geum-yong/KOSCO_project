import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import H3Bottom from './H3Bottom';
import H3Bottom2 from './H3Bottom2';
import H3Top from './H3Top';

const H3Form = () => {
  return (
    <form>
      <Info />
      <H3Top />
      <H3Bottom />
      <H3Bottom2 />
      <ButtonBox />
    </form>
  );
};

export default H3Form;
