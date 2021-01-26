import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import CBottom from './CBottom';
import CTop from './CTop';

const CForm = () => {
  return (
    <form>
      <Info />
      <CTop />
      <CBottom />
      <ButtonBox />
    </form>
  );
};

export default CForm;
