import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import GBottom from './GBottom';
import GBottom2 from './GBottom2';
import GBottom3 from './GBottom3';
import GTop from './GTop';

const GForm = () => {
  return (
    <form>
      <Info />
      <GTop />
      <GBottom />
      <GBottom2 />
      <GBottom3 />
      <ButtonBox />
    </form>
  );
};

export default GForm;
