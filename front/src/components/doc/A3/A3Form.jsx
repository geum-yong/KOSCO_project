import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import A3Bottom from './A3Bottom';
import A3Top from './A3Top';

const A3Form = () => {
  return (
    <form>
      <Info />
      <A3Top />
      <A3Bottom />
      <ButtonBox />
    </form>
  );
};

export default A3Form;
