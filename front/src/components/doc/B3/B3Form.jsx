import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import B3Bottom from './B3Bottom';
import B3Bottom2 from './B3Bottom2';
import B3Top from './B3Top';

const B3Form = () => {
  return (
    <form>
      <Info />
      <B3Top />
      <B3Bottom />
      <B3Bottom2 />
      <ButtonBox />
    </form>
  );
};

export default B3Form;
