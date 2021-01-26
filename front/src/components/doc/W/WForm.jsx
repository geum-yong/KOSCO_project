import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import WBottom from './WBottom';
import WBottom2 from './WBottom2';
import WTop from './WTop';

const WForm = () => {
  return (
    <form>
      <Info />
      <WTop />
      <WBottom />
      <WBottom2 />
      <ButtonBox />
    </form>
  );
};

export default WForm;
